/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let arr = str.toLowerCase().split("").filter((val) => val>='a' && val<='z');
  let [start,end] = [0,arr.length-1];
  while(start<end) {
    if(arr[start]!=arr[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

module.exports = isPalindrome;
