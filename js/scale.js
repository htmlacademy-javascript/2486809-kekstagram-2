import { Scale } from './constants.js';

const minusNode = document.querySelector('.scale__control--smaller');
const plusNode = document.querySelector('.scale__control--bigger');
const controlNode = document.querySelector('.scale__control--value');
const previewNode = document.querySelector('.img-upload__preview img');

let currentScale = Scale.DEFAULT;

const render = () => {
  controlNode.value = `${currentScale}%`;
  previewNode.style.transform = `scale(${currentScale * Scale.FACTOR})`;
};

minusNode.addEventListener('click', () => {
  currentScale = Math.max(currentScale - Scale.STEP, Scale.MIN);
  render();
});

plusNode.addEventListener('click', () => {
  currentScale = Math.min(currentScale + Scale.STEP, Scale.MAX);
  render();
});

export const resetScale = () => {
  currentScale = Scale.DEFAULT;
  render();
};

resetScale();
