function getStringGeoLocation(geo2) {
  const geo = geo2.toFixed(2);
  const latitudeDeg = geo.split('.')[0];
  const latitudeMin = geo.split('.')[1];

  return `${latitudeDeg}${String.fromCharCode(176)}${latitudeMin}'`;
}
export default getStringGeoLocation;
