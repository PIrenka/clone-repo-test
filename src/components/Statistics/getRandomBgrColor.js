function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const randomBgrColor = `rgb(${getRandomInt(256)},${getRandomInt(
  256,
)},${getRandomInt(256)})`;

export default randomBgrColor;
