
import getCurrentPosition from './getCurrentPosition.js';
import { searchLocWeather } from './searchLocWeather.js';

async function init() {
  const currentLocation = await getCurrentPosition();
  const weatherGeoObject = await searchLocWeather(`${currentLocation.city} ${currentLocation.country}`);
  return weatherGeoObject;
}

export default init;
