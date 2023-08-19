const modalMain = document.getElementById('modal_main');
modalMain.className = 'modal modal_active';
const modalSucess = document.getElementById('modal_success');
const modalClose = Array.from(document.getElementsByClassName('modal__close_times'));


for (let i = 0; i < modalClose.length; i++) {
  modalClose[i].onclick = function() {
    modalClose[i].closest('.modal_active').className = 'modal';
  }
}

const showSuccess = document.querySelector('.show-success');

showSuccess.onclick = function() {
  modalMain.className = 'modal';
  modalSucess.className = 'modal modal_active';
}