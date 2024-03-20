//Last Index Of

// Given a string S consisting only '0's and '1's,  find the last index of the '1' present in it.

/*
Example 1:
Input:
S = 00001
Output:
4
Explanation:
Last index of  1 in given string is 4.


Example 2:
Input:
0
Output:
-1
Explanation:
Since, 1 is not present, so output is -1.
*/

const S = "0001";
const lastIndexOf = (S) => {
  return S.lastIndexOf("1");
};

const lastIndexOfFoorLoop = (S) => {
  for (let i = S.length - 1; i >= 0; i--) {
    if (S[i] === "1") {
      return i;
    }
  }
  return -1;
};

lastIndexOfFoorLoop(S);
