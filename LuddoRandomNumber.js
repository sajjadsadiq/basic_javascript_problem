// Get Random Number

function getRandomNumber(min, max) {
  return Math.floor(Math.random * (min - max + 1)) + min;
}

console.log(Math.round(Math.random() * 6));
