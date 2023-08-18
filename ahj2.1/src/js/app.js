import goblin from '../img/goblin.png';

let currentIndex = 0;
let previousIndex = 0;

function drawBoard() {
  const board = document.getElementById('board');
  for (let i = 0; i < 16; i += 1) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.id = `cell_${i}`;
    board.appendChild(cell);
  }
}

function changeImg() {
  const img = document.createElement('img');
  img.src = goblin;

  setInterval(() => {
    do {
      currentIndex = Math.floor(Math.random() * 16);
    } while (currentIndex === previousIndex);

    const currentCell = document.getElementById(`cell_${currentIndex}`);
    currentCell.appendChild(img);
    const previousCell = document.getElementById(`cell_${previousIndex}`);
    previousIndex = currentIndex;
    previousCell.innerHTML = '';
  }, 1000);
}

drawBoard();
changeImg();
