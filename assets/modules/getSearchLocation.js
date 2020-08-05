async function getSearchLocation(place) {
  const lang = localStorage.getItem('lang');
  let errorMessage;
  if (lang === 'ru') {
    errorMessage = 'Ошибка запроса. Повторите пожалуйста.';
  } else if (lang === 'be') {
    errorMessage = 'Памылка запыту. Паўтарыце калі ласка.';
  } else {
    errorMessage = 'The request failed. Please repeat.';
  }

  const pattern = /[а-яА-ЯёЁa-zA-Zёа-зй-шы-яЁА-ЗЙ-ШЫІіЎў]{2,}/gi;
  const arrayPlace = place.match(pattern);
  if (!arrayPlace) {
    throw new Error(errorMessage);
  } else {
    const fullPlace = arrayPlace.join('?');
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${fullPlace}&key=f057205688c74be4b9261a7ed28307cd&language=${lang}?limit=1&pretty=1`;

    const res = await fetch(url);

    if (res.ok) {
      const data = await res.json();
      if (data.results.length > 0) {
        return data;
      }
      throw new Error(errorMessage);
    } else {
      throw new Error(errorMessage);
    }
  }
}

export default getSearchLocation;
