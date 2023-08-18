import Listener from './Listener';
import RegisterModal from './modals/RegisterModal';
import ErrorModal from './modals/ErrorModal';
import User from './User';

export default class ChatWidget {
  constructor(container, url) {
    this.container = container;
    this.url = url;
  }

  init() {
    this.bindToDOM();
    this.initModals();
    this.initElements();
    this.initWSConnection();
    this.registerListeners();
    this.modals.regModal.show();
    this.modals.regModal.setPosition(this.widgetEl);
  }

  // eslint-disable-next-line class-methods-use-this
  createHTML() {
    return `
      <div class="chat-widget-box">
        <div class="users-online-box"></div>
        <div class="chat-widget_main-content"></div>

        <footer class="chat-widget-footer">
          <textarea class="chat_text-field" placeholder="Type your message here"></textarea>
        </footer>

      </div>
    `;
  }

  bindToDOM() {
    this.container.insertAdjacentHTML('beforeend', this.createHTML());
    this.widgetEl = document.querySelector('.chat-widget-box');
  }

  initModals() {
    this.modals = {
      regModal: new RegisterModal(this.widgetEl),
      errModal: new ErrorModal(this.widgetEl),
    };
  }

  initElements() {
    this.chatInputEl = document.querySelector('.chat_text-field');
    this.registerInputEl = document.querySelector('.register-modal-input');
    this.modalBtnsEl = document.querySelectorAll('.modal-btn');
    this.userListEl = document.querySelector('.users-online-box');
    this.msgBoxEl = document.querySelector('.chat-widget_main-content');
  }

  initWSConnection() {
    this.ws = new WebSocket(this.url);
    this.ws.binaryType = 'blob';
  }

  registerListeners() {
    document.addEventListener('keypress', (event) => Listener.onKeyPress.call(this, event));
    window.addEventListener('beforeunload', () => this.onUnload());

    this.modalBtnsEl.forEach((btn) => {
      btn.addEventListener('click', (event) => this.onBtnClick(event));
    });
    this.ws.addEventListener('message', (event) => this.onWSMessage(event));
  }

  onBtnClick(event) {
    const { target } = event;
    const { classList } = target;

    if (classList.contains('reg-btn')) {
      Listener.onRegBtnClick.call(this, event);
      return;
    }

    if (classList.contains('err-btn')) {
      Listener.onErrBtnClick.call(this, event);
    }
  }

  onWSMessage(event) {
    Listener.onWSMessage.call(this, event);
  }

  onUnload() {
    Listener.onUnload.call(this);
  }

  redrawOnlineList({ data }) {
    data.forEach((user) => {
      const newUser = new User(this.userListEl, user, user.name === this.currentUserName);
      newUser.init();
    });
  }
}
