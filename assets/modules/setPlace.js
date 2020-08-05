import getCountry from './getCountry.js';

function setPlace(place) {
  return `${place.city}, ${getCountry(place.country)}`;
}

export default setPlace;
