// Given a string S as input. Delete the characters at odd indices of the string.

/*
Example 1:
Input: S = "Geeks"
Output: "Ges" 
Explanation: Deleted "e" at index 1
and "k" at index 3.

Example 2:
Input: S = "GeeksforGeeks"
Output: "GesoGes"
Explanation: Deleted e, k, f, r, e
k at index 1, 3, 5, 7, 9, 11.
*/

const string = "dRsEpTuCrWvOlIo";

const alternateChar = (str) => {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (i % 2 !== 1) {
      result = result + str[i];
    }
  }
  console.log("res", result);
  return result;
};

alternateChar(string);
