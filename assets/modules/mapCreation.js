
function mapCreation(latitude, longtitude) {
  mapboxgl.accessToken = 'pk.eyJ1Ijoia2F0ZXByb3Rhc2V2aWNoIiwiYSI6ImNrYW51c3RtMTFobDgzMHBpNjM0cHFybjcifQ.CyonwCxB6XdAmxBmyegnnA';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longtitude, latitude],
    zoom: 10,
  });
  const marker = new mapboxgl.Marker()
    .setLngLat([longtitude, latitude])
    .addTo(map);
}
export default mapCreation;
