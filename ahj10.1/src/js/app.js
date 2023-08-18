/* eslint import/no-cycle:0 */ // --> OFF
/* eslint  no-inner-declarations:0 */ // --> OFF
/* eslint  no-shadow:0 */ // --> OFF
/* eslint  no-unused-vars:0 */ // --> OFF
/* eslint  func-names:0 */ // --> OFF
import validate from './validate';

const moment = require('moment');

const input = document.getElementsByClassName('input_message')[0];
const btn = document.getElementsByClassName('write')[0];
const messenger = document.getElementsByClassName('messenger')[0];
const modal = document.getElementsByClassName('modal')[0];

btn.onclick = function (e) {
  e.preventDefault();
  const message = document.createElement('div');
  message.classList.add('message');
  message.textContent = input.value;

  const time = document.createElement('span');
  time.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
  time.classList.add('time');

  if (navigator.geolocation) {
    function success(position) {
      const location = document.createElement('span');
      location.textContent = `[${position.coords.latitude}, ${position.coords.longitude}]`;
      location.classList.add('location');
      message.insertAdjacentElement('beforeend', location);
    }

    function error(error) {
      modal.style.display = 'flex';
      const btnCancel = document.getElementById('cancel');
      const btnAccept = document.getElementById('accept');
      const form = document.getElementsByTagName('form')[0];
      const inputCoords = document.getElementById('input_coords');
      btnCancel.onclick = function (e) {
        e.preventDefault();
        form.reset();
        modal.style.display = 'none';
      };

      btnAccept.onclick = function (e) {
        e.preventDefault();
        if (validate(inputCoords.value)) {
          const location = document.createElement('span');
          location.textContent = inputCoords.value;
          location.classList.add('location');
          message.insertAdjacentElement('beforeend', location);
          form.reset();
          form.style.display = 'none';
        } else {
          throw new Error('Такие координаты невозможны!');
        }
      };
    }

    navigator.geolocation.getCurrentPosition(success, error);
  }

  messenger.insertAdjacentElement('afterbegin', message);
  message.insertAdjacentElement('beforeend', time);
};
