import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const startBtn = document.querySelector('button[data-start]');
const inputCalendar = document.querySelector('#datetime-picker');
const timerContainer = document.querySelector('.timer');

startBtn.disabled = true;

let date;
let deltaTime;

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] > Date.now()) {
      date = selectedDates[0];
      startBtn.disabled = false;
      startBtn.classList.add('start-active');
    } else {
      iziToast.show({
        title: 'Error',
        message: 'Please choose a date in the future',
        backgroundColor: '#B51B1B',
        image: '../img/error.svg',
        timeout: '3000',
      });
      startBtn.disabled = true;
      startBtn.classList.remove('start-active');
    }

    if (date) {
      deltaTime = date.getTime() - Date.now();
    }
  },
});

startBtn.addEventListener('click', handleCountdown);

function handleCountdown() {
  inputCalendar.style.cursor = 'default';
  startBtn.classList.remove('start-active');

  const countdownInterval = setInterval(() => {
    if (deltaTime > 999) {
      startBtn.disabled = true;
      inputCalendar.disabled = true;

      deltaTime -= 1000;
      const currentValue = convertMs(deltaTime);
      // console.log(currentValue);

      timerContainer.innerHTML = `<div class="field">
  <span class="value" data-days>${String(currentValue.days).padStart(
    2,
    '0'
  )}</span>
  <span class="label">Days</span>
</div>
<div class="field">
  <span class="value" data-hours>${String(currentValue.hours).padStart(
    2,
    '0'
  )}</span>
  <span class="label">Hours</span>
</div>
<div class="field">
  <span class="value" data-minutes>${String(currentValue.minutes).padStart(
    2,
    '0'
  )}</span>
  <span class="label">Minutes</span>
</div>
<div class="field">
  <span class="value" data-seconds>${String(currentValue.seconds).padStart(
    2,
    '0'
  )}</span>
  <span class="label">Seconds</span>
</div>`;
    } else {
      inputCalendar.disabled = false;

      inputCalendar.style.cursor = 'pointer';

      clearInterval(countdownInterval);
    }
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
