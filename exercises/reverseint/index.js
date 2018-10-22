// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const str = n.toString().split('').reverse().join('');
  if(n < 0) return parseInt(str) * - 1
  return parseInt(str)
}

function reverseInt1(n) {
  const str = n.toString().split('').reverse().join('');
  return parseInt(str) * Math.sign(n)
}

reverseInt(-100);

module.exports = reverseInt;
module.exports = reverseInt1;
