export default function drawBoard() {
  const board = document.getElementById('board');
  for (let i = 0; i < 16; i += 1) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.id = `cell_${i}`;
    board.appendChild(cell);
  }
}
