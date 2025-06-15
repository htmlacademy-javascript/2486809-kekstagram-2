//В файле main.js напишите необходимые функции для создания массива из 25 сгенерированных объектов.
//  Каждый объект массива — описание фотографии, опубликованной пользователем.

// выведу все функции и методы которые мне могут помочь.

const DESCRIPTIONS = [
  'Утро',
  'Солнышко',
  'Котенок',
];

const MIN_ID = 0;
const MAX_ID = 1000000;


const MIN_DESC = 0;
const MAX_DESC = [DESCRIPTIONS.length - 1];


const MIN_LIKES = 15;
const MAX_LIKES = 200;

const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;


const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.' ,
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.' ,
  'Как можно было поймать такой неудачный момент?!',
];

const MIN_MESSAGES = 0;
const MAX_MESSAGES = [MESSAGES.length - 1];

const NAMES = [
  'Алексей',
  'Иван',
  'Дмитрий',
  'Юлия',
  'Андрей',
  'Николай',
  'Михаил',
  'Егор',
  'Артем',
  'Владимир',
  'Александр',
  'Максим',
  'Олег',
  'Юрий',
  'Павел',
  'Саша',
  'Светлана',
  'Вика',
  'Маша',
  'Елена',
  'Оля',
  'Татьяна',
  'Наталья',
  'Анна',
];

const MIN_NAMES = 0;
const MAX_NAMES = [NAMES.length - 1];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getComment = () => ({
  id: getRandomInteger(MIN_ID, MAX_ID),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: MESSAGES[getRandomInteger(MIN_MESSAGES, MAX_MESSAGES)],
  name: NAMES[getRandomInteger(MIN_NAMES, MAX_NAMES)],
});

//Структура
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
  description: DESCRIPTIONS[getRandomInteger(MIN_DESC, MAX_DESC)],
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: getComments(),
});

const getPhotos = () => {
  const photos = [];
  for (let i = 1; i <= 25; i++) {
    photos.push(getPicture(i));
  }
  return photos;
};
