async function getCurrentPosition() {
  const url = 'https://ipinfo.io/json?token=db2afec3356e17';
  const res = await fetch(url);
  if (res.ok) {
    const data = await res.json();
    return data;
  }
  throw new Error(`Sorry, it is impossible to determine your location. HTTP Error: ${res.status}`);
}

export default getCurrentPosition;
