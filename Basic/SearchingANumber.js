// Searching a number

// Given an array arr of n elements and a integer k. Your task is to return the position of first occurence of k in the given array and if element k is not present in the array then return -1 .
// Note: Position of first element is considered as 1.

/*
Example 1:
Input:
n = 5
k = 16
arr = {9, 7, 2, 16, 4}
Output: 4
Explanation: k = 16 is found in the given array at position 4.

Example 2:
Input:
n = 7
k = 98
arr = {1, 22, 57, 47, 34, 18, 66}
Output: -1
Explanation: k = 98 isn't found in the given array.
*/

const array = [9, 7, 2, 16, 4];
const k = 16;

const search = (arr, k) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
      return i + 1;
    }
  }
};

search(array, k);
