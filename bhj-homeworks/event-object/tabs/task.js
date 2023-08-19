const tab = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));

for (let i = 0; i < tab.length; i++) {
  function addActive() {
    event.preventDefault();
    tab[i].closest('.tab__navigation').querySelector('.tab_active').classList.remove('tab_active');
    tabContent[i].closest('.tab__contents').querySelector('.tab__content_active').classList.remove('tab__content_active');

    tab[i].classList.add('tab_active');
    tabContent[i].classList.add('tab__content_active');
  }

  tab[i].addEventListener('click', addActive);
}