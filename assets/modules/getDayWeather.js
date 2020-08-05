function getDayWeather(array, dateFull, timeZona) {
  const date = dateFull.getUTCDate();
  let time = (12 - Math.round(timeZona / 3) * 3) % 24;
  if (time < 10) {
    time = `0${time}`;
  }
  const dayWeatherInfo = {};
  let day;
  if (arguments.length === 2) {
    day = array[0];
  } else {
    day = array.find((item) => item.dt_txt.includes(`${date} ${time}:00:00`));
  }

  dayWeatherInfo.temp = Math.round(day.main.temp);
  dayWeatherInfo.feeling = Math.round(day.main.feels_like);
  dayWeatherInfo.wind = Math.round(day.wind.speed);
  dayWeatherInfo.humidity = Math.round(day.main.humidity);
  dayWeatherInfo.image = day.weather[0].icon;
  dayWeatherInfo.imageId = day.weather[0].id;
  dayWeatherInfo.description = day.weather[0].description;

  return dayWeatherInfo;
}
export default getDayWeather;
