const fontSize = Array.from(document.querySelectorAll('.font-size'));
const colorText = Array.from(document.querySelector('.book__control_color').querySelectorAll('a.color'));
const colorBackground = Array.from(document.querySelector('.book__control_background').querySelectorAll('a.color'));
const bookContent = document.querySelector('.book__content');

//цикл для изменения размера текста
for (let i = 0; i < fontSize.length; i++) {
  const activeSize = () => {
    event.preventDefault();
    fontSize[i].closest('.book__control').querySelector('.font-size_active').classList.remove('font-size_active');
    fontSize[i].classList.add('font-size_active');
    addSize();
  }

  const addSize = () => {
    if (fontSize[i].dataset.size != undefined) {
      removeSize();
      bookContent.classList.add(`font-size_${fontSize[i].dataset.size}`);
    } else {
      removeSize();
    }
  }

  const removeSize = () => {
    bookContent.classList.remove('font-size_big');
    bookContent.classList.remove('font-size_small');
  }

  fontSize[i].addEventListener('click', activeSize);
}

//цикл для изменения цвета текста (на случай, если цветов будет больше)
for (let j = 0; j < colorText.length; j++) {
  const activeColorText = () => {
    event.preventDefault();
    colorText[j].closest('.book__control').querySelector('.color_active').classList.remove('color_active');
    colorText[j].classList.add('color_active');
    addColorText();
  }

  const addColorText = () => {
    if (colorText[j].dataset.color != undefined) {
      removeColorText();
      bookContent.classList.add(`book_color-${colorText[j].dataset.color}`);
    } else {
      removeColorText();
    }
  }

  const removeColorText = () => {
    bookContent.classList.remove('book_color-gray');
    bookContent.classList.remove('book_color-whitesmoke');
  }

  colorText[j].addEventListener('click', activeColorText);
}

//цикл для изменения цвета фона (на случай, если цветов будет больше)
for (let k = 0; k < colorBackground.length; k++) {
  const activeColorBackground = () => {
    event.preventDefault();
    colorBackground[k].closest('.book__control').querySelector('.color_active').classList.remove('color_active');
    colorBackground[k].classList.add('color_active');
    addColorBackground();
  }

  const addColorBackground = () => {
    if (colorBackground[k].dataset.color != undefined) {
      removeColorBackground();
      bookContent.classList.add(`color_${colorBackground[k].dataset.color}`);
    } else {
      removeColorBackground();
    }
  }

  const removeColorBackground = () => {
    bookContent.classList.remove('color_black');
    bookContent.classList.remove('color_gray');
  }

  colorBackground[k].addEventListener('click', activeColorBackground)
}

    