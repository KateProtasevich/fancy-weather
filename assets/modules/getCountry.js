import COUNTRY from './country.js';

function getCountry(countyCode) {
  let county;
  if (Object.prototype.hasOwnProperty.call(COUNTRY, countyCode)) {
    county = COUNTRY[countyCode];
  }
  return county;
}
export default getCountry;
