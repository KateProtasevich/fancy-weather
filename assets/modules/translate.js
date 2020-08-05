import setTranslatedData from './setTranslatedData.js';
import { searchLocWeather, inputPlace } from './searchLocWeather.js';

function translate(zone) {
  const lang = localStorage.getItem('lang');

  searchLocWeather(inputPlace).then((placeWeatherObject) => {
    setTranslatedData(placeWeatherObject);
  });
}

export default translate;
