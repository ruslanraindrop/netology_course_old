/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
export default class Collapse {
  constructor(container) {
    this.container = container;
  }

  init() {
    this.bindToDOM();
    this.initElements();
    this.registerListeners();
  }

  createHtml() {
    return `      
        <div class="collapse">
          <div class="collapse-btn">Collapse</div>
          <div class="collapse-content">
            <p class="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <p class="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <p class="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>            
        </div> 
    `;
  }

  bindToDOM() {
    this.container.insertAdjacentHTML('beforeend', this.createHtml());
  }

  initElements() {
    this.btn = document.querySelector('.collapse-btn');
    this.content = document.querySelector('.collapse-content');
  }

  registerListeners() {
    this.btn.addEventListener('click', () => this.onClick());
    this.content.addEventListener('transitionend', (event) => this.onTransitionEnd(event));
    this.content.addEventListener('transitionstart', (event) => this.onTransitionStart(event));
  }

  onClick() {
    this.content.classList.toggle('collapse-hidden');
  }

  onTransitionEnd(event) {
    if (event.target.classList.contains('collapse-hidden')) {
      event.target.style.borderWidth = '0px';
    }
  }

  onTransitionStart(event) {
    if (!event.target.classList.contains('collapse-hidden')) {
      event.target.style.border = '1px solid gray';
    }
  }
}
