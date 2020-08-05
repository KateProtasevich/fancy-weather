/* eslint-disable import/no-cycle */
import { SEARCH_INPUT, msInHour } from './const.js';
import { searchLocWeather } from './searchLocWeather.js';
import setData from './setData.js';
import { currentZone } from '../../script.js';
import addLinkToImage from './addLinkToImage.js';

let searchZone;

async function search(place) {
  searchLocWeather(place).then((placeWeatherObject) => {
    const today = new Date(Date.now() + (-currentZone + placeWeatherObject.timeZone) * msInHour);
    searchZone = placeWeatherObject.timeZone;
    setData(placeWeatherObject);
    addLinkToImage(today, placeWeatherObject.latitude);
  }).catch((er) => {
    SEARCH_INPUT.value = er;
  });
}

export { search, searchZone };
