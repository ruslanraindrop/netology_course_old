import changeImg from './changeImg';

export default class Counter {
  constructor(frequency) {
    this.frequency = frequency;
    this.score = document.getElementById('1');
  }

  reset() {
    this.count = 0;
    this.click = false;
    this.score.textContent = `Вы пропустили ${this.count} гоблинов`;
  }

  start() {
    this.intervalID = setInterval(() => {
      this.click = false;
      this.check();
      this.next();
    }, this.frequency);
  }

  check() {
    this.score.textContent = `Вы пропустили ${this.count} гоблинов`;

    if (this.count > 5) {
      alert('Вы проиграли!');
      clearInterval(this.intervalID);
      this.reset();
      this.start();
    }

    if (this.click === false) {
      this.count += 1;
    }
  }

  onClick() {
    this.click = true;
    if (this.count > 0) {
      this.count -= 1;
    } else {
      this.count = 0;
    }
    this.click = false;
    changeImg();
  }

  onNext(handler) {
    this.next = handler;
  }
}
