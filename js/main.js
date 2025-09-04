import { renderCards } from './render.js';
import './form.js';
import { showAlert } from './utils.js';
import { getData } from './api.js';
import { initFilter } from './filter.js';

getData()
  .then((data) => {
    renderCards(data);
    initFilter(data);
  })
  .catch(() => {
    showAlert();
  });

