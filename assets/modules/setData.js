/* eslint-disable import/no-cycle */
import {
  LATITUDE_CONTAINER,
  LONGITUDE_CONTAINER,
} from './const.js';
import mapCreation from './mapCreation.js';
import innerValueToContainer from './innerValueToContainer.js';
import getStringGeoLocation from './getStringGeoLocation.js';
import setTranslatedData from './setTranslatedData.js';


function setData(placeWeatherObject) {
  setTranslatedData(placeWeatherObject);
  mapCreation(placeWeatherObject.latitude, placeWeatherObject.longitude);
  const lat = getStringGeoLocation(placeWeatherObject.latitude);
  const long = getStringGeoLocation(placeWeatherObject.longitude);
  innerValueToContainer([lat, long], [LATITUDE_CONTAINER, LONGITUDE_CONTAINER]);
}

export default setData;
