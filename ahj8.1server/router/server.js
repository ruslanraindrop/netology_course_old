const http = require('http');
const fs = require('fs');
const path = require('path');

const Router = require('koa-router');
const Koa = require('koa');
const koaBody = require('koa-body');
const koaStatic = require('koa-static');

const { streamEvents } = require('http-event-stream');
const uuid = require('uuid');
const moment = require('moment');

const fn = require('./js/functions');

const app = new Koa();
const port = process.env.PORT || 7070;
const public = path.join(__dirname, '/public');

app.use(koaBody({
  urlencoded: true,
  multipart: true,
}));

app.use(koaStatic(public));

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

const messages = [];
let id = 0;

const router = new Router();

router.get('/', async (ctx) => {
  streamEvents(ctx.req, ctx.res, {
    async fetch(lastEventId) {
      console.log(lastEventId);
      return [];
    },

     stream(sse) {
      const intId = setInterval(() => {
        const time = moment().format('hh:mm:ss DD.MM.YY');
        let type = fn.emulateDiceRoll();
        id++;
        
        if (messages.length >= 50) {
          clearInterval(intId);
          return;
        }        

        if (messages.length === 0) {
          type = 'start';
        } 
        
        const message = Object.assign({}, fn.getActionType(type));
        message.time = time;
        messages.push(message);

        message.id = uuid.v4();
        const data = JSON.stringify(message);

        sse.sendEvent({data: JSON.stringify(message), id});

      }, fn.getIntervalTime());                 
      
      return () => {};
    }
  });

  ctx.respond = false;
});

app.use(router.routes()).use(router.allowedMethods());
const server = http.createServer(app.callback()).listen(port);