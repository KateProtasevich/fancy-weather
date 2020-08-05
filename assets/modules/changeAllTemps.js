import changeTempDeg from './changeTempDeg.js';

function changeAllTemps() {
  Array.from(document.querySelectorAll('[data-temp]')).forEach((item) => {
    const newTemp = changeTempDeg(Number(item.textContent));
    item.textContent = `${newTemp}`;
  });
}
export default changeAllTemps;
