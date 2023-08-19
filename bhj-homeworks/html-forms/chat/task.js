const widget = document.querySelector('.chat-widget');
const widgetInput = document.getElementById('chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');
let date = new Date().toLocaleTimeString();

const activeWidget = () => widget.classList.add('chat-widget_active');
widget.addEventListener('click', activeWidget);

const answers = [
    'Вы не купили ни одного товара для того, чтобы так с нами разговаривать!',
    'Кто тут?',
    'Где ваша совесть?',
    'К сожалению, все операторы сейчас заняты. Не пишите нам больше',
    'Добрый день! До свидания!',
    'Мы ничего не будем вам продавать!'
];

function getAnswer(e) {
  if (e.keyCode === 13) {
    if (widgetInput.value.length > 0) {
      messages.innerHTML += `
        <div class="message message_client">
          <div class="message__time">${date}</div>
          <div class="message__text">${e.target.value}</div>
        </div>
      `;
      widgetInput.value = '';
    } else {
      return;
    }

    let i = Math.floor(Math.random() * answers.length);
    
    messages.innerHTML += `
      <div class="message">
         <div class="message__time">${date}</div>
         <div class="message__text">${answers[i]}</div>
      </div>
    `;
  }
}

widgetInput.addEventListener('keydown', getAnswer);