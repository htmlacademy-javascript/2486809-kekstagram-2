import { Effects, EffectsSettings } from './constants.js';

const effectsListNode = document.querySelector('.effects__list');
const previewNode = document.querySelector('.img-upload__preview img');
const sliderNode = document.querySelector('.effect-level__slider');
const effectControlNode = document.querySelector('.effect-level__value');
const effectLevelNode = document.querySelector('.effect-level');

let currentEffect = Effects.NONE;

noUiSlider.create(sliderNode, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      return parseFloat(value);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const isDefault = () => currentEffect === Effects.NONE;

const renderPreview = () => {
  if (isDefault()) {
    previewNode.style.filter = '';
  } else {
    const { style, units } = EffectsSettings[currentEffect];
    previewNode.style.filter = `${style}(${effectControlNode.value}${units})`;
  }
};

const updateSlider = () => {
  const { slider } = EffectsSettings[currentEffect];
  sliderNode.noUiSlider.updateOptions(slider);
};

const showSlider = (isShown = true) => {
  if (isShown) {
    effectLevelNode.classList.remove('hidden');
  } else {
    effectLevelNode.classList.add('hidden');
  }
};

const resetEffects = () => {
  showSlider(false);
  renderPreview();
};

effectsListNode.addEventListener('change', ({ target }) => {
  currentEffect = target.value;
  if (isDefault()) {
    resetEffects();
  } else {
    showSlider();
    updateSlider();
  }
});

sliderNode.noUiSlider.on('update', () => {
  effectControlNode.value = sliderNode.noUiSlider.get();
  renderPreview();
});

export const setDefaultEffects = () => {
  currentEffect = Effects.NONE;
  resetEffects();
};

setDefaultEffects();
