import weatherDescription from './weatherDescription.js';

function translateWeatherDescription(description) {
  const key = description;
  return weatherDescription[key];
}

export default translateWeatherDescription;
