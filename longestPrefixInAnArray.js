// Longest Common Prefix in an Array
// N = 4
// arr[] = {geeksforgeeks, geeks, geek,
//          geezer}
//outPut = "gee"

const arr = ["geeksforgeeks", "geeks", "geek", "geezer"];

const LongestPrefix = (arr) => {
  console.log("Str", arr[1].split(""));

  for (let i = 0; i < 1; i++) {
    const firstNumber = arr[0].split[""];
    let commonPrefix = [];
    for (let j = 1; j < arr.length; j++) {}
  }
};

LongestPrefix(arr);

class Solution {
  longestCommonPrefix(arr, n) {
    if (n == 1) return arr[0];
    let res = "";
    let include;
    for (let i = 0; i < arr[0].length; ++i) {
      include = true;
      for (let j = 1; j < n; ++j) {
        // checking if the current character arr[0][i] is eligible
        // for being included in the result or not
        if (i >= arr[j].length || arr[0][i] != arr[j][i]) {
          include = false;
          break;
        }
      }
      // if it can't be included, we need not check the further characters
      if (!include) break;
      // if it can be included, we include it and check ahead
      res += arr[0][i];
    }
    if (res == "") return "-1";
    return res;
  }
  // Contributed By: Pranay Bansal
}
