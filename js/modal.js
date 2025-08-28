import { COMMENTS_STEP } from './constants.js';

const bigPictureNode = document.querySelector('.big-picture');
const closeButtonNode = bigPictureNode.querySelector('.big-picture__cancel');
const body = document.body;
const imageNode = bigPictureNode.querySelector('.big-picture__img img');
const likesNode = bigPictureNode.querySelector('.likes-count');
const captionNode = bigPictureNode.querySelector('.social__caption');
const commentTemplate = bigPictureNode.querySelector('.social__comment');
const commentsListNode = bigPictureNode.querySelector('.social__comments');
const commentsTotalNode = bigPictureNode.querySelector('.social__comment-total-count');
const commentsStatisticNode = bigPictureNode.querySelector('.social__comment-shown-count');
const loaderNode = bigPictureNode.querySelector('.social__comments-loader');

let localComments;
let commentsStatistic;

const showModal = (isShown = true) => {
  if (isShown) {
    bigPictureNode.classList.remove('hidden');
    body.classList.add('modal-open');
  } else {
    bigPictureNode.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};

const renderStatistic = () => {
  commentsStatisticNode.textContent = commentsStatistic;
};

const renderLoaderButton = () => {
  if (localComments.length) {
    loaderNode.classList.remove('hidden');
  } else {
    loaderNode.classList.add('hidden');
  }
};

const renderComments = () => {
  const fragment = document.createDocumentFragment();
  localComments.splice(0, COMMENTS_STEP).forEach(({ avatar, message, name }) => {
    const newCommentNode = commentTemplate.cloneNode(true);
    const userpicNode = newCommentNode.querySelector('.social__picture');
    userpicNode.src = avatar;
    userpicNode.alt = name;
    newCommentNode.querySelector('.social__text').textContent = message;
    fragment.append(newCommentNode);

    commentsStatistic++;
  });
  commentsListNode.append(fragment);

  renderStatistic();
  renderLoaderButton();
};

const renderModal = ({ url, likes, description, comments }) => {
  imageNode.src = url;
  likesNode.textContent = likes;
  captionNode.textContent = description;
  commentsTotalNode.textContent = comments.length;
  commentsListNode.innerHTML = '';
  commentsStatistic = 0;
  localComments = [...comments];
  renderComments();
};

export const openModal = ({ url, likes, description, comments }) => {
  showModal();
  renderModal({ url, likes, description, comments });
};

closeButtonNode.addEventListener('click', () => {
  showModal(false);
});

loaderNode.addEventListener('click', () => {
  renderComments();
});
