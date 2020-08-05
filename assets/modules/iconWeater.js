/* eslint-disable import/prefer-default-export */

const icons = {
  200: {
    '11d': 'thunderstorms',
    '11n': 'thunderstorms',
  },
  201: {
    '11d': 'thunderstorms',
    '11n': 'thunderstorms',
  },
  202: {
    '11d': 'thunderstorms',
    '11n': 'thunderstorms',
  },
  210: {
    '11d': 'thunderstorms',
    '11n': 'thunderstorms',
  },
  211: {
    '11d': 'thunderstorms',
    '11n': 'thunderstorms',
  },
  212: {
    '11d': 'thunderstorms',
    '11n': 'thunderstorms',
  },
  221: {
    '11d': 'thunderstorms',
    '11n': 'thunderstorms',
  },
  230: {
    '11d': 'thunderstorms',
    '11n': 'thunderstorms',
  },
  231: {
    '11d': 'thunderstorms',
    '11n': 'thunderstorms',
  },
  232: {
    '11d': 'thunderstorms',
    '11n': 'thunderstorms',
  },
  300: {
    '09d': 'partly-cloudy-day-drizzle',
    '09n': 'partly-cloudy-night-drizzle',
  },
  301: {
    '09d': 'drizzle',
    '09n': 'drizzle',
  },
  302: {
    '09d': 'drizzle',
    '09n': 'drizzle',
  },
  310: {
    '09d': 'rain',
    '09n': 'rain',
  },
  311: {
    '09d': 'rain',
    '09n': 'rain',
  },
  312: {
    '09d': 'rain',
    '09n': 'rain',
  },
  313: {
    '09d': 'rain',
    '09n': 'rain',
  },
  314: {
    '09d': 'rain',
    '09n': 'rain',
  },
  321: {
    '09d': 'drizzle',
    '09n': 'drizzle',
  },
  500: {
    '10d': 'partly-cloudy-day-rain',
    '10n': 'partly-cloudy-night-rain',
  },
  501: {
    '10d': 'partly-cloudy-day-rain',
    '10n': 'partly-cloudy-night-rain',
  },
  502: {
    '10d': 'partly-cloudy-day-rain',
    '10n': 'partly-cloudy-night-rain',
  },
  503: {
    '10d': 'partly-cloudy-day-rain',
    '10n': 'partly-cloudy-night-rain',
  },
  504: {
    '10d': 'partly-cloudy-day-rain',
    '10n': 'partly-cloudy-night-rain',
  },
  511: {
    '10d': 'partly-cloudy-day-hail',
    '10n': 'partly-cloudy-night-hail',
  },
  520: {
    '10d': 'rain',
    '10n': 'rain',
  },
  521: {
    '10d': 'rain',
    '10n': 'rain',
  },
  522: {
    '10d': 'rain',
    '10n': 'rain',
  },
  531: {
    '10d': 'rain',
    '10n': 'rain',
  },
  600: {
    '13d': 'partly-cloudy-day-snow',
    '13n': 'partly-cloudy-night-snow',
  },
  601: {
    '13d': 'partly-cloudy-day-snow',
    '13n': 'partly-cloudy-night-snow',
  },
  602: {
    '13d': 'snow',
    '13n': 'snow',
  },
  611: {
    '13d': 'partly-cloudy-day-snow',
    '13n': 'partly-cloudy-night-snow',
  },
  612: {
    '13d': 'partly-cloudy-day-snow',
    '13n': 'partly-cloudy-night-snow',
  },
  613: {
    '13d': 'snow',
    '13n': 'snow',
  },
  615: {
    '13d': 'partly-cloudy-day-snow',
    '13n': 'partly-cloudy-night-snow',
  },
  616: {
    '13d': 'partly-cloudy-day-snow',
    '13n': 'partly-cloudy-night-snow',
  },
  620: {
    '13d': 'partly-cloudy-day-snow',
    '13n': 'partly-cloudy-night-snow',
  },
  621: {
    '13d': 'snow',
    '13n': 'snow',
  },
  622: {
    '13d': 'snow',
    '13n': 'snow',
  },
  701: {
    '50d': 'mist',
    '50n': 'mist',
  },
  711: {
    '50d': 'mist',
    '50n': 'mist',
  },
  721: {
    '50d': 'mist',
    '50n': 'mist',
  },
  731: {
    '50d': 'wind',
    '50n': 'wind',
  },
  741: {
    '50d': 'mist',
    '50n': 'mist',
  },
  751: {
    '50d': 'wind',
    '50n': 'wind',
  },
  761: {
    '50d': 'wind',
    '50n': 'wind',
  },
  762: {
    '50d': 'mist',
    '50n': 'mist',
  },
  771: {
    '50d': 'tornado',
    '50n': 'tornado',
  },
  781: {
    '50d': 'tornado',
    '50n': 'tornado',
  },
  800: {
    '01d': 'clear-day',
    '01n': 'clear-night',
  },
  801: {
    '02d': 'partly-cloudy-day',
    '02n': 'partly-cloudy-night',
  },
  802: {
    '03d': 'partly-cloudy-day',
    '03n': 'partly-cloudy-night',
  },
  803: {
    '04d': 'cloudy',
    '04n': 'cloudy',
  },
  804: {
    '04d': 'cloudy',
    '04n': 'cloudy',
  },
};

function addIconWeather(iconId, icon) {
  return icons[iconId][icon];
}

export { addIconWeather };
