import goblin from '../img/goblin.png';

let currentIndex = 0;
let previousIndex = 0;
export const img = document.createElement('img');
img.src = goblin;

export default function changeImg() {
  do {
    currentIndex = Math.floor(Math.random() * 16);
  } while (currentIndex === previousIndex);
  const currentCell = document.getElementById(`cell_${currentIndex}`);
  currentCell.appendChild(img);
  const previousCell = document.getElementById(`cell_${previousIndex}`);
  previousIndex = currentIndex;
  previousCell.innerHTML = '';
}
