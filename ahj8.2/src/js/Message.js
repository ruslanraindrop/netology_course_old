import moment from 'moment';
import { v4 as uuidV4 } from 'uuid';

export default class Message {
  constructor(container,
    {
      userName,
      text,
      id = uuidV4(),
      date = moment().format('hh:mm DD.MM.YY'),
    },

    currentUser) {
    this.container = container;
    this.userName = userName;
    this.text = text;

    this.id = id;
    this.date = date;
    this.isCurrent = this.userName === currentUser;
  }

  init() {
    this.bindToDOM();
  }

  createHTML() {
    return `
      <div class="user-message_box" data-id=${this.id} data-current-msg="${this.isCurrent}">
        <div class="user-message_header">${this.userName}, ${this.date}</div>
        <div class="user-message_text">${this.text}</div>
      </div>
    `;
  }

  bindToDOM() {
    this.container.insertAdjacentHTML('beforeend', this.createHTML());
  }
}
