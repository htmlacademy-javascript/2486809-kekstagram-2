const cardTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

export const renderCards = (photos) => {
  console.log(photos);
  const fragment = document.createDocumentFragment();
  photos.forEach(({url, likes, description, comments}) => {
    const card = cardTemplate.cloneNode(true);
    const image = card.querySelector('.picture__img');
    image.src = url;
    image.alt = description;
    card.querySelector('.picture__comments').textContent = comments.length;
    card.querySelector('.picture__likes').textContent = likes;
    fragment.append(card);
  });
  container.append(fragment);
};

