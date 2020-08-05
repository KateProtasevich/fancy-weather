function changeTempDeg(value2) {
  const deg = localStorage.getItem('deg');
  const value = Number(value2);
  if (deg === 'C') {
    return Math.round((5 / 9) * (value - 32));
  }
  return Math.round((9 / 5) * value + 32);
}
export default changeTempDeg;
