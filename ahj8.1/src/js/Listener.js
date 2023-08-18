import MessageBox from './MessageBox';

export default class Listeners {
  static onEvtSrcMessage(event) {
    const data = JSON.parse(event.data);
    const box = new MessageBox(data);
    box.bindToDOM(this.msgBox);
  }
}
