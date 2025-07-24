import { getPhotos } from './data.js';
import { renderCards } from './render.js';

const data = getPhotos();
renderCards(data);


