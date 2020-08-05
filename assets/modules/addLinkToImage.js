
import getLinkToImage from './getLinkToImage.js';

function addLinkToImage(date, latitude) {
  let month = date.getMonth();
  let season;
  let partOfDay;
  if (latitude < 0) {
    month = (month + 6) % 12;
  }
  switch (month) {
    case (11 || 0 || 1): season = 'winter'; break;
    case (2 || 3 || 4): season = 'spring'; break;
    case (5 || 6 || 7): season = 'summer'; break;
    default: season = 'autumn'; break;
  }
  const hour = date.getHours();

  switch (true) {
    case (hour >= 6 && hour < 12): partOfDay = 'morning'; break;
    case (hour >= 12 && hour < 18): partOfDay = 'day'; break;
    case (hour >= 18 && hour < 23): partOfDay = 'evening'; break;
    default: partOfDay = 'night'; break;
  }
  console.log('Параметры для поиска картинки:', season, partOfDay);

  getLinkToImage(season, partOfDay).then((image) => {
    document.body.style.backgroundImage = `url(${image})`;
  }).catch((error) => console.log(error));
}

export default addLinkToImage;
