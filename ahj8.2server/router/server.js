const http = require('http');
const WS = require('ws');
const Koa = require('koa');
const koaBody = require('koa-body');
const User = require('./classes/User.js');

const app = new Koa();
const port = process.env.PORT || 7070;

app.use(koaBody({
  urlencoded: true,
  multipart: true,
}));

app.use(async (ctx, next) => {
  const origin = ctx.request.get('Origin'); 
  
  if (!origin) {
    return await next();
  }  

  const headers = { 'Access-Control-Allow-Origin': '*', };
  
  if (ctx.request.method !== 'OPTIONS') {
    ctx.response.set({...headers});
    try {
      return await next();
    } catch (e) {
      e.headers = {...e.headers, ...headers};
      throw e;
    }
  }
  
  if (ctx.request.get('Access-Control-Request-Method')) {
    ctx.response.set({
      ...headers,
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
    });
  
    if (ctx.request.get('Access-Control-Request-Headers')) {
      ctx.response.set('Access-Control-Allow-Headers', ctx.request.get('Access-Control-Allow-Request-Headers'));
    }
  
    ctx.response.status = 204;
  }
});


const server = http.createServer(app.callback()).listen(port);
const wsServer = new WS.Server({server})

let clients = [];

wsServer.on('connection', (ws, req) => {
  ws.on('message', (msg) => {
    const request = JSON.parse(msg);
    const { method, data } = request;
    let response = {};
    response.method = method;
  

    if(method === 'newNick') {        
      response.method = method;

      if(clients.find((client) => client.name === data)) {
        response.status = false;
        ws.send(JSON.stringify(response));
      } else {
        response.status = true;
        clients.push(new User(data));
        response.data = clients.filter((client) => client.status);
        wsServer.clients.forEach((client) => client.send(JSON.stringify(response)));
      }
     
      return;
    }

    if (method === 'delUser') {
      response.method = method;
      response.status = true;
      clients = clients.filter((client) => client.name !== data);
      response.data = clients;

      wsServer.clients.forEach((client) => client.send(JSON.stringify(response)));
    }

    if(method === 'newMsg') {
      response.method = method;
      response.status = true;
      const filtered = clients.filter((client) => client.name === data.userName)[0];
      filtered.messages.push(data);      
      response.data = data;

      wsServer.clients.forEach((client) => client.send(JSON.stringify(response)));
      return;
    }
  });
});
