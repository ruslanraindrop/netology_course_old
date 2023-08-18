import Message from './Message';

export default class Listeners {
  static onKeyPress(event) {
    if (event.key !== 'Enter') return;

    const { target } = event;

    if (!target.classList.contains('chat_text-field')) return;
    if (!target.value.trim()) return;

    const { value } = target;
    this.chatInputEl.value = '';
    this.chatInputEl.blur();

    const userName = this.currentUserName;
    const text = value;
    const messageBox = new Message(this.msgBoxEl, { userName, text }, userName);
    messageBox.init();

    const data = {
      userName,
      text,
      id: messageBox.id,
      timeStamp: messageBox.timeStamp,
      date: messageBox.date,
    };

    const request = { method: 'newMsg', data };
    this.ws.send(JSON.stringify(request));
  }

  static onUnload() {
    const request = { method: 'delUser', data: this.currentUserName };
    this.ws.send(JSON.stringify(request));
  }

  static onWSMessage(event) {
    if (!this.currentUserName) return;

    const response = JSON.parse(event.data);
    const {
      method, status, data,
    } = response;

    if (method === 'newNick') {
      if (!status) {
        this.modals.errModal.show();
        this.modals.errModal.setPosition(this.widgetEl);
        return;
      }

      this.modals.regModal.hide();
      this.userListEl.textContent = '';
      this.redrawOnlineList(response);
      return;
    }

    if (method === 'delUser') {
      if (!status) return;

      this.userListEl.textContent = '';
      this.redrawOnlineList(response);
      return;
    }

    if (method === 'newMsg') {
      if (!status) return;

      if (data.userName === this.currentUserName) return;

      const messageBox = new Message(this.msgBoxEl, data, this.currentUserId);
      messageBox.init();
    }
  }

  static onRegBtnClick(event) {
    event.preventDefault();
    const nickName = this.registerInputEl.value.trim();

    if (!nickName) return;

    const request = { method: 'newNick', data: nickName };
    this.ws.send(JSON.stringify(request));
    this.currentUserName = nickName;
  }

  static onErrBtnClick(event) {
    event.preventDefault();

    this.modals.errModal.hide();
    this.modals.regModal.show();
  }
}
