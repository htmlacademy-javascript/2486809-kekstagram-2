import { ALERT_DELAY } from './constants.js';

const body = document.body;
const dataErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');

export const showModal = (modal, isShown = true) => {
  if (isShown) {
    modal.classList.remove('hidden');
    body.classList.add('modal-open');
  } else {
    modal.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};

export const showAlert = () => {
  const dataAlert = dataErrorTemplate.cloneNode(true);
  body.append(dataAlert);

  setTimeout(() => {
    dataAlert.remove();
  }, ALERT_DELAY);
};

export const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};
