const timer = document.getElementById('timer');
const id = setInterval(time, 1000);

function time() {
  timer.textContent = Number(timer.textContent) - 1;
  if (timer.textContent == 0) {
    clearInterval(id);
    alert('Вы победили в конкурсе!');
  }
}