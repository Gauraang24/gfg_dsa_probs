// Given a number N. Your task is to check whether it is fascinating or not.
// Fascinating Number: When a number(should contain 3 digits or more) is multiplied by 2 and 3, and when both these products are concatenated with the original number, then it results in all digits from 1 to 9 present exactly once.

/*

Example 1:
Input: 
N = 192
Output: Fascinating
Explanation: After multiplication with 2
and 3, and concatenating with original
number, number will become 192384576 
which contains all digits from 1 to 9.

Example 2:
Input: 
N = 853
Output: Not Fascinating
Explanation: It's not a fascinating
number.
*/

const n = "19";

const isFascinating = (n) => {
  const str = (n + n * 2 + n * 3).split("");
  let total = 0;

  for (let i = 0; i < str.length; i++) {
    console.log("str[i]", str[i]);
    total = total + parseInt(str[i]);
  }

  return str.length === 9 && total === 45
    ? console.log("Fascinating")
    : console.log("Not Fascinating");
};

isFascinating(n);
