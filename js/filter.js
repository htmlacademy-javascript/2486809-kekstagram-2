import { Filters, RANDOM_COUNT, RANDOM_FACTOR } from './constants.js';
import { renderCards } from './render.js';
import { debounce } from './utils.js';

const containerNode = document.querySelector('.img-filters');
const filterFormNode = document.querySelector('.img-filters__form');

const debouncedRender = debounce(renderCards);

let localPictures;

const filtersActions = {
  [Filters.DEFAULT]: () => localPictures,
  [Filters.DISCUSSED]: () => [...localPictures].sort((a, b) => b.comments.length - a.comments.length),
  [Filters.RANDOM]: () => [...localPictures].sort(() => Math.random() - RANDOM_FACTOR).slice(0, RANDOM_COUNT)
};

export const initFilter = (pictures) => {
  localPictures = [...pictures];
  containerNode.classList.remove('img-filters--inactive');
};

const setActiveButton = (button) => {
  document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  button.classList.add('img-filters__button--active');
};

filterFormNode.addEventListener('click', ({ target }) => {
  const button = target.closest('.img-filters__button');
  if (button) {
    const photos = filtersActions[button.id]();
    setActiveButton(button);
    debouncedRender(photos);
  }
});
