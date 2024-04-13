/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

const VOWEL = ['a','e','i','o','u'];

function countVowels(str) {
    // Your code here
   const count = str.toLowerCase().split("").reduce((count,val) => {
    VOWEL.indexOf(val)!=-1?count++:count;
    return count;
   },0);
   return count;
}

module.exports = countVowels;