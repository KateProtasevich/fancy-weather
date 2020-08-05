/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import init from './assets/modules/init.js';
import { searchPlace } from './assets/modules/searchLocWeather.js';
import {
  SEARCH_BUTTON,
  LOADING,
  LANG_DROPLIST,
  SEARCH_INPUT,
} from './assets/modules/const.js';
import { search } from './assets/modules/search.js';
import setData from './assets/modules/setData.js';
import changeAllTemps from './assets/modules/changeAllTemps.js';
import translate from './assets/modules/translate.js';
import addLinkToImage from './assets/modules/addLinkToImage.js';

const langDefault = 'en';
const degDefault = 'C';
let currentZone;

if (!(localStorage.getItem('deg'))) {
  localStorage.setItem('deg', degDefault);
}
if (!(localStorage.getItem('lang'))) {
  localStorage.setItem('lang', langDefault);
}

Array.from(LANG_DROPLIST.children).forEach((item) => {
  if (item.value === localStorage.getItem('lang')) {
    item.selected = true;
  } else {
    item.selected = false;
  }
});

Array.from(document.querySelectorAll('.temp-deg')).forEach((item) => {
  if (item.value === localStorage.getItem('deg')) {
    item.checked = true;
  } else {
    item.checked = false;
  }
});


init().then((placeWeatherObject) => {
  currentZone = placeWeatherObject.timeZone;
  addLinkToImage(new Date(), placeWeatherObject.latitude);
  setData(placeWeatherObject);
  setTimeout(() => {
    LOADING.style.display = 'none';
  }, 1000);
}).catch((error) => {
  alert(error);
  LOADING.style.display = 'none';
});

document.querySelector('.temp-switch__wrapper').addEventListener('click', (event) => {
  if (event.target.value !== localStorage.getItem('deg') && event.target.value) {
    localStorage.setItem('deg', event.target.value);
    changeAllTemps();
  }
});

document.querySelector('#lang-droplist').addEventListener('change', (event) => {
  if (event.target.value !== localStorage.getItem('lang')) {
    localStorage.setItem('lang', event.target.value);
    translate();
  }
});

SEARCH_BUTTON.addEventListener('click', () => {
  if (SEARCH_INPUT.value) {
    search(SEARCH_INPUT.value);
  }
});

SEARCH_INPUT.addEventListener('keydown', function startSearch(event) {
  if (event.code === 'Enter' && this.value) {
    search(this.value);
  }
});

document.querySelector('#bg-image-btn').addEventListener('click', () => {
  const msInHour = 60 * 60 * 1000;
  const todayInSearchCity = new Date(Date.now() + (-currentZone + searchPlace.timeZone) * msInHour);
  addLinkToImage(todayInSearchCity, searchPlace.latitude);
});

export { currentZone };
