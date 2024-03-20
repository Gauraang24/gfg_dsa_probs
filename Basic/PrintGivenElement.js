// C++ Array (print an element)

// Given an array arr of n integers and an index key(0-based index). Your task is to return the element present at the index key in the array.

// Example 1:
// Input:
// n = 5
// key = 2
// arr = {10, 20, 30, 40, 50}
// Output: 30
// Explanation: The value of arr[2] is 30 .
// Example 2:

// Input:
// n = 7
// key = 4
// arr = {10, 20, 30, 40, 50, 60, 70}
// Output: 50
// Explanation: The value of the arr[4] is 50 .

const arr = [10, 20, 30, 40, 50, 60, 70];
const key = 4;

const findElem = (arr, key) => {
  return arr[key];
};

findElem(arr, key);
