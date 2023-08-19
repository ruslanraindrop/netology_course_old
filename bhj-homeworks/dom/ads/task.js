const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));
let current = 0;

const addColor = (i) => rotatorCase[i].setAttribute(`style`, `color:${rotatorCase[i].dataset.color}`);
const addActive = (current) => rotatorCase[current].classList.add('rotator__case_active');
const removeActive = (current) => rotatorCase[current].classList.remove('rotator__case_active');

for (let i = 0; i < rotatorCase.length; i++) {
  addColor(i);
}

function changeText() {
  if (current === (rotatorCase.length - 1)) {
    removeActive(current);
    current = 0;
    addActive(current);
  } else {
    removeActive(current);
    current ++;
    addActive(current);
  }
}

setInterval(changeText, 1000);
