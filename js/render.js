import { openModal } from './modal.js';

const cardTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

let localPhotos;

const clear = () => {
  container.querySelectorAll('.picture').forEach((item) => item.remove());
};

export const renderCards = (photos) => {
  localPhotos = [...photos];
  clear();
  const fragment = document.createDocumentFragment();
  photos.forEach(({ id, url, likes, description, comments }) => {
    const card = cardTemplate.cloneNode(true);
    const image = card.querySelector('.picture__img');
    image.src = url;
    image.alt = description;
    card.querySelector('.picture__comments').textContent = comments.length;
    card.querySelector('.picture__likes').textContent = likes;
    card.dataset.id = id;
    fragment.append(card);
  });
  container.append(fragment);
};

container.addEventListener('click', (evt) => {
  const card = evt.target.closest('.picture');
  if (card) {
    const id = Number(card.dataset.id);
    const currentPhoto = localPhotos.find((item) => item.id === id);
    openModal(currentPhoto);
  }
});
