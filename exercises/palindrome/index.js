// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/**
 * Solution 1
 * reversing and matching
 */
function palindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

/**
 * Solution 2
 * index by index checking
 */
function palindrome1(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  })
}

module.exports = palindrome;
module.exports = palindrome1;

