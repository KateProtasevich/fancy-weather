async function getLinkToImage(...rest) {
  const param = rest.join(',');
  const url = `https://api.unsplash.com/photos/random?query=${param}&orientation=landscape&client_id=rUk4YiDANoqdU1oSGO1TV7hZ5t17rswKJfEmB5XimJY`;
  try {
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      return data.urls.regular;
    }
    throw new Error('Извините, картинка для фона не найдена!');
  } catch (error) {
    throw new Error('Извините, картинка для фона не найдена!');
  }
}

export default getLinkToImage;
