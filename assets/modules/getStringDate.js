import { dateInLang } from './const.js';

function getStringDate(date) {
  const lang = localStorage.getItem('lang');

  let weekday = date.toLocaleString(lang, { weekday: 'short' });
  const day = date.toLocaleString(lang, { day: 'numeric' });
  let month = date.toLocaleString(lang, { month: 'long' });
  const time = date.toLocaleString(lang, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  if (lang === 'be') {
    weekday = dateInLang[lang].weekday[date.getDay()];
    month = dateInLang[lang].month[date.getMonth()];
  } else if (lang === 'ru') {
    month = dateInLang[lang].month[date.getMonth()];
  }

  return `${weekday} ${day} ${month} ${time}`;
}
export default getStringDate;
