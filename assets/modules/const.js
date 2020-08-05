const LOCATION_CONTAINER = document.querySelector('#location');
const TODAY_DATE_CONTAINER = document.querySelector('#date');
const TODAY_TEMP_CONTAINER = document.querySelector('#today-temp');
const TODAY_WEATHER_IMAGE_CONTAINER = document.querySelector('#today-weather-image');
const TODAY_FEELING_CONTAINER = document.querySelector('#feels-like');
const TODAY_WIND_CONTAINER = document.querySelector('#wind');
const TODAY_HUMIDITY_CONTAINER = document.querySelector('#humidity');
const LOADING = document.querySelector('#loading');
const WEEKDAY1_CONTAINER = document.querySelector('#weekday1');
const WEEKDAY2_CONTAINER = document.querySelector('#weekday2');
const WEEKDAY3_CONTAINER = document.querySelector('#weekday3');
const DAY1_WEATHER_IMAGE_CONTAINER = document.querySelector('#day1-weather-image');
const DAY2_WEATHER_IMAGE_CONTAINER = document.querySelector('#day2-weather-image');
const DAY3_WEATHER_IMAGE_CONTAINER = document.querySelector('#day3-weather-image');
const DAY1_TEMP_CONTAINER = document.querySelector('#day1-temp');
const DAY2_TEMP_CONTAINER = document.querySelector('#day2-temp');
const DAY3_TEMP_CONTAINER = document.querySelector('#day3-temp');
const LATITUDE_CONTAINER = document.querySelector('#latitude');
const LONGITUDE_CONTAINER = document.querySelector('#longitude');
const SEARCH_INPUT = document.querySelector('#search-input');
const LANG_DROPLIST = document.querySelector('#lang-droplist');
const SEARCH_BUTTON = document.querySelector('#search-btn');
const TODAY_WEATHER_DESCRIPTION = document.querySelector('#today-weather-description');
const msInHour = 60 * 60 * 1000;
const dateInLang = {
  be: {
    weekday: ['Нд', 'Пн', 'Аў', 'Ср', 'Чц', 'Пт', 'Сб'],
    month: ['Студзеня', 'Лютага', 'Сакавіка', 'Красавіка', 'Мая', 'Чэрвеня', 'Ліпеня', 'Жніўня', 'Верасня', 'Кастрычніка', 'Лістапада', 'Снежня'],
  },
  ru: {
    month: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
  },
};

const WEEK = {
  en: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
  ru: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
  be: ['нядзеля', 'панядзелак', 'аўторак', 'серада', 'чацвер', 'пятніца', 'субота'],
};

const dataForTranslate = {
  latitude: {
    en: 'latitude',
    ru: 'широта',
    be: 'шырата',
  },
  longitude: {
    en: 'longitude',
    ru: 'долгота',
    be: 'даўгата',
  },
  search: {
    en: 'search',
    ru: 'поиск',
    be: 'пошук',
  },
  placeholderForSearch: {
    en: 'Search city',
    ru: 'Поиск города',
    be: 'Пошук горада',
  },
  'feels-like': {
    en: 'feels like',
    ru: 'ощущается как',
    be: 'адчуваецца як',
  },
  wind: {
    en: 'wind',
    ru: 'ветер',
    be: 'вецер',
  },
  'wind-units': {
    en: 'm/s',
    ru: 'м/с',
    be: 'м/с',
  },
  humidity: {
    en: 'humidity',
    ru: 'влажность',
    be: 'вільготнасць',
  },
};


export {
  dataForTranslate,
  dateInLang,
  TODAY_WEATHER_DESCRIPTION,
  SEARCH_BUTTON,
  LOCATION_CONTAINER,
  TODAY_DATE_CONTAINER,
  TODAY_TEMP_CONTAINER,
  TODAY_WEATHER_IMAGE_CONTAINER,
  LOADING,
  WEEKDAY1_CONTAINER,
  WEEKDAY2_CONTAINER,
  WEEKDAY3_CONTAINER,
  TODAY_FEELING_CONTAINER,
  TODAY_WIND_CONTAINER,
  TODAY_HUMIDITY_CONTAINER,
  DAY1_WEATHER_IMAGE_CONTAINER,
  DAY2_WEATHER_IMAGE_CONTAINER,
  DAY3_WEATHER_IMAGE_CONTAINER,
  DAY1_TEMP_CONTAINER,
  DAY2_TEMP_CONTAINER,
  DAY3_TEMP_CONTAINER,
  LATITUDE_CONTAINER,
  LONGITUDE_CONTAINER,
  WEEK,
  LANG_DROPLIST,
  SEARCH_INPUT,
  msInHour,
};
