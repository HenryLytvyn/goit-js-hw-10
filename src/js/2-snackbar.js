// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const radioFulfilled = document.querySelector('.input-fulfilled');
const radioRejected = document.querySelector('.input-rejected');

form.addEventListener('submit', handleSubmit);

let delay;

function handleSubmit(event) {
  event.preventDefault();
  delay = Number(event.target.elements.delay.value);

  const promise = new Promise((resolve, reject) => {
    if (radioFulfilled.checked) {
      setTimeout(() => {
        resolve();
      }, delay);
    }
    if (radioRejected) {
      setTimeout(() => {
        reject();
      }, delay);
    }
  });

  const success = {
    title: 'OK',
    message: `Fulfilled promise in ${delay}ms`,
    messageColor: '#ffffff',
    backgroundColor: '#59a10d',
    position: 'bottomCenter',
    iconUrl: '../img/ok.svg',
  };
  const error = {
    title: 'Error',
    message: `Rejected promise in ${delay}ms`,
    messageColor: '#ffffff',
    backgroundColor: '#ef4040',
    position: 'bottomCenter',
    iconUrl: '../img/error.svg',
  };

  promise
    .then(() => {
      iziToast.show(success);
    })
    .catch(() => {
      iziToast.show(error);
    });

  form.reset();
}
