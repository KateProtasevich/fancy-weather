/* eslint-disable import/no-cycle */
/* eslint max-len: ["error", { "code": 300 }] */
import {
  LOCATION_CONTAINER,
  TODAY_DATE_CONTAINER,
  TODAY_TEMP_CONTAINER,
  TODAY_WEATHER_IMAGE_CONTAINER,
  TODAY_WEATHER_DESCRIPTION,
  WEEKDAY1_CONTAINER,
  WEEKDAY2_CONTAINER,
  WEEKDAY3_CONTAINER,
  DAY1_TEMP_CONTAINER,
  DAY2_TEMP_CONTAINER,
  DAY3_TEMP_CONTAINER,
  DAY1_WEATHER_IMAGE_CONTAINER,
  DAY2_WEATHER_IMAGE_CONTAINER,
  DAY3_WEATHER_IMAGE_CONTAINER,
  TODAY_FEELING_CONTAINER,
  TODAY_WIND_CONTAINER,
  TODAY_HUMIDITY_CONTAINER,
  msInHour,
} from './const.js';
import getNextDay from './getNextDay.js';
import getStringDate from './getStringDate.js';
import innerValueToContainer from './innerValueToContainer.js';
import getDayWeather from './getDayWeather.js';
import { currentZone } from '../../script.js';
import setDefaults from './setDefaults.js';
import { addIconWeather } from './iconWeater.js';
import translateWeatherDescription from './translateWeatherDescription.js';


let timerId;
function setTranslatedData(placeWeatherObject) {
  const lang = localStorage.getItem('lang');
  setDefaults();
  if (!timerId) {
    clearInterval(timerId);
  }
  clearInterval(timerId);
  const today = new Date(Date.now() + (-currentZone + placeWeatherObject.timeZone) * msInHour);
  timerId = setInterval(() => {
    const todayIn = new Date(Date.now() + 1000 + (-currentZone + placeWeatherObject.timeZone) * msInHour);
    const day1 = getNextDay(today);
    for (let n = 1; n <= document.querySelector('.weather-3days-wrapper').children.length; n++) {
      const weekday = day1();
      innerValueToContainer(weekday, eval(`WEEKDAY${n}_CONTAINER`));
    }
    innerValueToContainer(getStringDate(todayIn), TODAY_DATE_CONTAINER);
  }, 1000);

  for (let n = 1; n <= document.querySelector('.weather-3days-wrapper').children.length; n++) {
    const nowHereTime = new Date();
    const nextDate = new Date(nowHereTime.getTime() + n * 24 * msInHour);
    const dayWeather = getDayWeather(placeWeatherObject.weather, nextDate, placeWeatherObject.timeZone);
    innerValueToContainer(dayWeather.temp, eval(`DAY${n}_TEMP_CONTAINER`));

    const dayWeatherIcon = addIconWeather(dayWeather.imageId, dayWeather.image);
    eval(`DAY${n}_WEATHER_IMAGE_CONTAINER`).src = `/assets/images/${dayWeatherIcon}.svg`;
  }
  const todayWeather = getDayWeather(placeWeatherObject.weather, today);
  innerValueToContainer([todayWeather.temp, todayWeather.description, todayWeather.feeling, todayWeather.wind, todayWeather.humidity], [TODAY_TEMP_CONTAINER, TODAY_WEATHER_DESCRIPTION, TODAY_FEELING_CONTAINER, TODAY_WIND_CONTAINER, TODAY_HUMIDITY_CONTAINER]);

  if (lang === 'be') {
    const weatherDesc = translateWeatherDescription(todayWeather.description);
    innerValueToContainer(weatherDesc, TODAY_WEATHER_DESCRIPTION);
  } else {
    innerValueToContainer(todayWeather.description, TODAY_WEATHER_DESCRIPTION);
  }
  const todayWeatherIcon = addIconWeather(todayWeather.imageId, todayWeather.image);
  TODAY_WEATHER_IMAGE_CONTAINER.src = `/assets/images/${todayWeatherIcon}.svg`;
  innerValueToContainer(placeWeatherObject.place.results[0].formatted, LOCATION_CONTAINER);
}

export default setTranslatedData;
