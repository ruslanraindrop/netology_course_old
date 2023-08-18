import Listener from './Listener';

export default class OnlineWidget {
  constructor(url) {
    this.url = url;
    this.eventSource = new EventSource(this.url);
    this.msgBox = null;
  }

  init(container) {
    this.bindToDOM(container);
    this.initElements();
    this.addEventSourceListeners();
  }

  // eslint-disable-next-line class-methods-use-this
  createHtml() {
    return `
      <div class="manager-box">
        <div class="messages-box"></div>
      </div>
   `;
  }

  bindToDOM(container) {
    container.insertAdjacentHTML('beforeend', this.createHtml());
  }

  initElements() {
    this.msgBox = document.querySelector('.messages-box');
  }

  addEventSourceListeners() {
    this.eventSource.addEventListener('message', (event) => Listener.onEvtSrcMessage.call(this, event));
  }
}
