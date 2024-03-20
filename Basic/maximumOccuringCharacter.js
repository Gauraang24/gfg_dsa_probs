// Maximum Occuring Character

// Given a string str of lowercase alphabets. The task is to find the maximum occurring character in the string str. If more than one character occurs the maximum number of time then print the lexicographically smaller character.

/*
Example 1:
Input:
str = testsample
Output: e
Explanation: e is the character which
is having the highest frequency.

Example 2:
Input:
str = output
Output: t
Explanation:  t and u are the characters
with the same frequency, but t is
lexicographically smaller.
*/

const string = "aaAbcAAcccc";

const maxOccuringChar = (str) => {
  const object = {};
  for (let i = 0; i < str.length; i++) {
    if (object.hasOwnProperty(str[i])) {
      object[str[i]] = object[str[i]] + 1;
    } else {
      object[str[i]] = 0;
    }
  }
  console.log("object", object);
};

maxOccuringChar(string);
