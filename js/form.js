import { showModal } from './utils.js';
import { isValid, resetValidation } from './validation.js';
import { resetScale } from './scale.js';
import { setDefaultEffects } from './effects.js';
import { showPopup } from './popup.js';
import { Popups, SubmitButtonText } from './constants.js';
import { sendData } from './api.js';
import { removeEscapeControle, setEscapeControle } from './escape-controle.js';

const formNode = document.querySelector('#upload-select-image');
const uploadFileNode = formNode.querySelector('#upload-file');
const modalNode = formNode.querySelector('.img-upload__overlay');
const closeButtonNode = formNode.querySelector('#upload-cancel');
const submitButton = formNode.querySelector('#upload-submit');
const previewNode = document.querySelector('.img-upload__preview img');
const effectsNodes = document.querySelectorAll('.effects__preview');
const descriptionNode = formNode.querySelector('.text__description');
const hashtagsNode = formNode.querySelector('.text__hashtags');

const closeModal = () => {
  showModal(modalNode, false);
  formNode.reset();
  resetValidation();
  setDefaultEffects();
  resetScale();
};

const canCloseForm = () => !(document.activeElement === hashtagsNode || document.activeElement === descriptionNode);

const setPreview = () => {
  const file = uploadFileNode.files[0];
  const url = URL.createObjectURL(file);
  previewNode.src = url;
  effectsNodes.forEach((radio) => {
    radio.style.backgroundImage = `url('${url}')`;
  });
};

uploadFileNode.addEventListener('change', () => {
  setPreview();
  showModal(modalNode);
  setEscapeControle(closeModal, canCloseForm);
});

closeButtonNode.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeModal();
  removeEscapeControle();
});

const blockSubmitButton = (isBlocked = true) => {
  submitButton.textContent = isBlocked ? SubmitButtonText.SENDING : SubmitButtonText.IDLE;
  submitButton.disabled = isBlocked;
};

formNode.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (isValid()) {
    blockSubmitButton();
    sendData(new FormData(formNode))
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        closeModal();
        removeEscapeControle();
        showPopup(Popups.SUCCESS);
      })
      .catch(() => {
        showPopup(Popups.ERROR);
      })
      .finally(() => {
        blockSubmitButton(false);
      });
  }
});
