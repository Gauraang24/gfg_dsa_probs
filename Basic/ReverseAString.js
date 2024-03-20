//Reversing a string

// You are given a string s. You need to reverse the string.

/*
Example 1:
Input:
s = Geeks
Output: skeeG

Example 2:
Input:
s = for
Output: rof
*/

const string = "Gaurang";

const reverseString1 = (s) => {
  return s.split("").reverse().join("");
};

const reverseString2 = (s) => {
  const reverse = [];

  for (let i = 0; i < s.length; i++) {
    reverse.unshift(s[i]);
  }
  return reverse.join("");
};

reverseString1(string);
reverseString2(string);
