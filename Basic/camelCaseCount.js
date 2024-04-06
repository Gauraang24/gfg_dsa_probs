//Count All Capital Alphabets

// Given a string. Count the number of Camel Case characters in it.

/*
Example 1:
Input:
S = "ckjkUUYII"
Output: 5
Explanation: Camel Case characters present:
U, U, Y, I and I.

Example 2:
Input: 
S = "abcd"
Output: 0
Explanation: No Camel Case character
present.
*/

const string = "ckjkUUYII";

const capitalLetter = (str) => {
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      result++;
    }
  }

  return result;
};

capitalLetter(string);
