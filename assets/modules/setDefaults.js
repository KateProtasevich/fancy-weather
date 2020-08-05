import {
  SEARCH_INPUT,
  dataForTranslate,
} from './const.js';

function setDefaults() {
  const lang = localStorage.getItem('lang');
  const itemsForTranslate = document.querySelectorAll('[data-i18n]');
  Array.from(itemsForTranslate).forEach((item) => {
    const key = item.getAttribute('data-i18n');
    item.textContent = dataForTranslate[key][lang];
  });
  SEARCH_INPUT.placeholder = dataForTranslate.placeholderForSearch[lang];
}
export default setDefaults;
