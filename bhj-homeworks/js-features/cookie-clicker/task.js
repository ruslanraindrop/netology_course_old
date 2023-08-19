const cookie = document.getElementById('cookie');
const minWidth = cookie.width;
const counter = document.getElementById('clicker__counter');

cookie.onclick = function() {
  if (this.width === minWidth) {
    this.width = this.width * 1.1;
  } else {
    this.width = minWidth;
  }

  counter.textContent = Number(counter.textContent) + 1;
}

