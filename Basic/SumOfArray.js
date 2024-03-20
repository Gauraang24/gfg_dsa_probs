//Sum of Array

// Given an integer array arr[] of size n. The task is to find sum of it.

// Input:
// n = 4
// arr[] = {1, 2, 3, 4}
// Output: 10
// Explanation: 1 + 2 + 3 + 4 = 10.

const arr = [1, 2, 3, 4];

const sum = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  return total;
};
