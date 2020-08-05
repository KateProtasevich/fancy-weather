async function getForecast(latitude, longitude) {
  let lang = localStorage.getItem('lang');
  if (lang === 'be') {
    lang = 'en';
  }
  let deg;
  if (localStorage.getItem('deg') === 'F') {
    deg = 'imperial';
  } else {
    deg = 'metric';
  }
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&lang=${lang}&units=${deg}&APPID=9daf2a80e2c03ed4cae718d581306165`;

  try {
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      return data.list;
    }
    throw new Error(`Sorry, it is impossible to determine weather. HTTP: ${res.status}`);
  } catch (error) {
    throw new Error(`Sorry, it is impossible to determine weather. HTTP: ${error}`);
  }

}
export default getForecast;
