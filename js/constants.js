export const Effects = {
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
  NONE: 'none'
};

export const EffectsSettings = {
  [Effects.CHROME]: {
    style: 'grayscale',
    units: '',
    slider: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    }
  },
  [Effects.SEPIA]: {
    style: 'sepia',
    units: '',
    slider: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    }
  },
  [Effects.MARVIN]: {
    style: 'invert',
    units: '%',
    slider: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    }
  },
  [Effects.PHOBOS]: {
    style: 'blur',
    units: 'px',
    slider: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    }
  },
  [Effects.HEAT]: {
    style: 'brightness',
    units: '',
    slider: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    }
  },
};

export const Scale = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
  DEFAULT: 100,
  FACTOR: 0.01
};

export const MAX_DESCRIPTION = 140;
export const HASHTAG_FORMULA = /^#[a-zа-яё0-9]{1,19}$/i;
export const MAX_HASHTAGS = 5;

export const COMMENTS_STEP = 5;

export const ALERT_DELAY = 5000;

export const Popups = {
  SUCCESS: 'success',
  ERROR: 'error'
};

export const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};

export const Filters = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

export const RANDOM_COUNT = 10;
export const RANDOM_FACTOR = 0.5;
