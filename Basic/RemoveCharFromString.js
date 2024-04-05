// Remove all characters except the numeric characters from an alphanumeric string.

/*
Example 1:
Input: S = "AA1d23cBB4"
Output: 1234
Explanation: Remove all characters
other than numbers

Example 2:
Input: S = "a1b2c3"
Output: 123
Explanation: Remove all characters
other than numbers
*/

const Stringg = "AA1d23cBB4";

const removeString = (str) => {
  let num = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 0 && str[i] <= 9) {
      num += str[i];
    }
  }

  return num;
};

removeString(Stringg);
