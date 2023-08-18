import checkPaymentSystem from './checkPaymentSystem';
import luhnAlgorithm from './luhnAlgorithm';

const inputValidate = document.getElementById('input');
const formValidate = document.getElementById('form');
const mir = document.getElementById('mir');
const visa = document.getElementById('visa');
const americanexpress = document.getElementById('express');
const dinersclub = document.getElementById('diners');
const maestro = document.getElementById('maestro');
const mastercard = document.getElementById('mastercard');
const jcb = document.getElementById('jcb');
const unionpay = document.getElementById('unionpay');
const discover = document.getElementById('discover');

const message = document.createElement('p');
message.style.textAlign = 'center';
message.style.padding = '20px';

function highlightCard() {
  if (checkPaymentSystem(inputValidate.value) === 'mir') {
    mir.style.opacity = '100%';
  } else {
    mir.style.opacity = '40%';
  }

  if (checkPaymentSystem(inputValidate.value) === 'dinersclub') {
    dinersclub.style.opacity = '100%';
  } else {
    dinersclub.style.opacity = '40%';
  }

  if (checkPaymentSystem(inputValidate.value) === 'jcb') {
    jcb.style.opacity = '100%';
  } else {
    jcb.style.opacity = '40%';
  }

  if (checkPaymentSystem(inputValidate.value) === 'americanexpress') {
    americanexpress.style.opacity = '100%';
  } else {
    americanexpress.style.opacity = '40%';
  }

  if (checkPaymentSystem(inputValidate.value) === 'visa') {
    visa.style.opacity = '100%';
  } else {
    visa.style.opacity = '40%';
  }

  if (checkPaymentSystem(inputValidate.value) === 'maestro') {
    maestro.style.opacity = '100%';
  } else {
    maestro.style.opacity = '40%';
  }

  if (checkPaymentSystem(inputValidate.value) === 'mastercard') {
    mastercard.style.opacity = '100%';
  } else {
    mastercard.style.opacity = '40%';
  }

  if (checkPaymentSystem(inputValidate.value) === 'discover') {
    discover.style.opacity = '100%';
  } else {
    discover.style.opacity = '40%';
  }

  if (checkPaymentSystem(inputValidate.value) === 'unionpay') {
    unionpay.style.opacity = '100%';
  } else {
    unionpay.style.opacity = '40%';
  }
}

function validation(event) {
  event.preventDefault();
  if (luhnAlgorithm(inputValidate.value)) {
    message.textContent = 'Валидация прошла успешно';
    document.body.appendChild(message);
  } else {
    message.textContent = 'Ошибка! Проверьте данные карты внимательнее';
    document.body.appendChild(message);
  }
}

inputValidate.addEventListener('input', highlightCard);
formValidate.addEventListener('submit', validation);
