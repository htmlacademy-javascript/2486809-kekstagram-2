import { DESCRIPTIONS, MAX_AVATAR, MAX_COMMENTS, MAX_ID, MAX_LIKES, MESSAGES, MIN_AVATAR, MIN_COMMENTS, MIN_ID, MIN_LIKES, NAMES, PHOTOS_COUNT } from './constants.js';
import { getRandomElement, getRandomInteger } from './utils.js';

const getComment = () => ({
  id: getRandomInteger(MIN_ID, MAX_ID),
  avatar: `img/avatar-${getRandomInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
  message: getRandomElement(MESSAGES),
  name: getRandomElement(NAMES),
});

const getComments = () => {
  const countComments = getRandomInteger(MIN_COMMENTS, MAX_COMMENTS);
  const comments = [];
  for (let i = 1; i <= countComments; i++) {
    comments.push(getComment());
  }
  return comments;
};

const getPicture = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: getRandomElement(DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: getComments(),
});

export const getPhotos = () => {
  const photos = [];
  for (let i = 1; i <= PHOTOS_COUNT; i++) {
    photos.push(getPicture(i));
  }
  return photos;
};
