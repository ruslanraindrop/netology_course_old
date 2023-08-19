const next = document.querySelector('.slider__arrow_next');
const prev = document.querySelector('.slider__arrow_prev');
const images = Array.from(document.getElementsByClassName('slider__item'));
const dots = Array.from(document.getElementsByClassName('slider__dot'));
let current = 0;
dots[current].classList.add('slider__dot_active');

function addActive(current) {
  images[current].classList.add('slider__item_active');
  dots[current].classList.add('slider__dot_active');
}

function removeActive(current) {
  images[current].classList.remove('slider__item_active');
  dots[current].classList.remove('slider__dot_active');
}

next.onclick = function() {
  if (current < (images.length - 1)) {
    current++;
  } else {
    removeActive(current);
    current = 0;
  }
  addActive(current);
  removeActive(current-1);
}

prev.onclick = function() {
  if (current === 0) {
    removeActive(current);
    current = (images.length - 1);
  } else {
    current--;
  }
  addActive(current);
  removeActive(current+1);
}

for (let i = 0; i < dots.length; i++) {
  dots[i].onclick = function() {
    removeActive(current);
    addActive(i);
    current = i;
  }
}