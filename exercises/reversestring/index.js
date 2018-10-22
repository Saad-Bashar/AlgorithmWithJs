/**
 * Directions
 * Given a string, return a new string with the reversed
 * order of characters
* */

/**
 * Solution 1: 
 * Looping through the string from backward
 * @param {*} str 
 */
function reverse(str) {
  let reverse = "";
  for (let index = str.length - 1; index >= 0 ; index--) {
    reverse += str[index];
  }
  return reverse;
}

/**
 * Solution 2: 
 * using js built in arr.reverse
 * @param {*} str 
 */
function reverse1(str) {
  return str.split('').reverse().join('');
}

/**
 * Solution: 3
 * with for loop
 */
function reverse2(str) {
  let reversed = '';
  for(let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}

/**
 * Solution 4
 * with reduce function
 */
function reverse3(str) {
  return str.split('').reduce((reversed, character) => {
    return character + reversed;
  }, '');
}

module.exports = reverse;
module.exports = reverse1;
module.exports = reverse2;
module.exports = reverse3;

