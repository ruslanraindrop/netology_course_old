export default class User {
  constructor(container, { name, id }, isCurrent) {
    this.container = container;
    this.name = name;
    this.id = id;
    this.isCurrent = isCurrent;
  }

  init() {
    this.bindToDOM();
  }

  createHTML() {
    return `
      <div class="user-online_box" data-id=${this.id} data-current-user="${this.isCurrent}">
        <div class="user-online_avatar"></div>
        <div class="user-online_name">${this.name}</div>
      </div>
    `;
  }

  bindToDOM() {
    this.container.insertAdjacentHTML('beforeend', this.createHTML());
  }
}
