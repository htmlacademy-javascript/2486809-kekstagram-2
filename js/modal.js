import { COMMENTS_STEP } from './constants.js';
import { removeEscapeControle, setEscapeControle } from './escape-controle.js';
import { showModal } from './utils.js';

const modalNode = document.querySelector('.big-picture');
const closeButtonNode = modalNode.querySelector('.big-picture__cancel');

const imageNode = modalNode.querySelector('.big-picture__img img');
const likesNode = modalNode.querySelector('.likes-count');
const captionNode = modalNode.querySelector('.social__caption');
const commentTemplate = modalNode.querySelector('.social__comment');
const commentsListNode = modalNode.querySelector('.social__comments');
const commentsTotalNode = modalNode.querySelector('.social__comment-total-count');
const commentsStatisticNode = modalNode.querySelector('.social__comment-shown-count');
const loaderNode = modalNode.querySelector('.social__comments-loader');

let localComments;
let commentsStatistic;

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
  showModal(modalNode);
  renderModal({ url, likes, description, comments });
  setEscapeControle(() => {
    showModal(modalNode, false);
  });
};

closeButtonNode.addEventListener('click', () => {
  showModal(modalNode, false);
  removeEscapeControle();
});

loaderNode.addEventListener('click', () => {
  renderComments();
});
