import { HASHTAG_FORMULA, MAX_DESCRIPTION, MAX_HASHTAGS } from './constants.js';

const formNode = document.querySelector('#upload-select-image');
const descriptionNode = formNode.querySelector('.text__description');
const hashtagsNode = formNode.querySelector('.text__hashtags');

const validation = new Pristine(formNode, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
});

const getHashtags = (text) => text.toLowerCase().trim().split(' ').filter((item) => item.length);

const checkDecsription = (value) => value.length <= MAX_DESCRIPTION;

const checkHashtags = (value) => {
  if (!value.trim().length) {
    return true;
  }
  const hashtags = getHashtags(value);
  return hashtags.every((item) => HASHTAG_FORMULA.test(item));
};

const checkUniqueHashtags = (value) => {
  if (!value.trim().length) {
    return true;
  }
  const hashtags = getHashtags(value);
  const uniques = [...new Set(hashtags)];
  return hashtags.length === uniques.length;
};

const checkHashtagsLength = (value) => {
  if (!value.trim().length) {
    return true;
  }
  const hashtags = getHashtags(value);
  return hashtags.length <= MAX_HASHTAGS;
};

validation.addValidator(
  descriptionNode,
  checkDecsription,
  `Текст не должен превышать ${MAX_DESCRIPTION} символов`
);

validation.addValidator(
  hashtagsNode,
  checkUniqueHashtags,
  'один и тот же хэштег не может быть использован дважды'
);

validation.addValidator(
  hashtagsNode,
  checkHashtags,
  `хэштег начинается с символа # (решётка); строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.;
  хеш-тег не может состоять только из одной решётки;
  максимальная длина одного хэштега 20 символов, включая решётку`
);

validation.addValidator(
  hashtagsNode,
  checkHashtagsLength,
  'нельзя указать больше пяти хэштегов'
);

export const isValid = () => validation.validate();

export const resetValidation = () => {
  validation.reset();
};
