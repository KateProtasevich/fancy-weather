import { WEEK } from './const.js';

function getNextDay(date) {
  let counter = date.getDay();
  const lang = localStorage.getItem('lang');


  return function day() {
    counter += 1;
    return WEEK[lang][counter % 7];
  };
}
export default getNextDay;
