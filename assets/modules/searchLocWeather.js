import getForecast from './getForecast.js';
import getSearchLocation from './getSearchLocation.js';

let inputPlace;
let searchPlace;

async function searchLocWeather(place) {
  const foundLocation = await getSearchLocation(place);
  inputPlace = place;
  const lat = foundLocation.results[0].geometry.lat;
  const lng = foundLocation.results[0].geometry.lng;
  const timeZone = Number(foundLocation.results[0].annotations.timezone.offset_string.slice(0, 3));
  const forecast = await getForecast(lat, lng);
  const object = {
    place: foundLocation,
    weather: forecast,
    latitude: lat,
    longitude: lng,
    time: foundLocation.timestamp.created_http,
    timeZone,
  };
  searchPlace = object;
  return object;
}

export { searchLocWeather, inputPlace, searchPlace };
