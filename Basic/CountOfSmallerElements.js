// Given an sorted array A of size N. Find number of elements which are less than or equal to given element X.

// Input:
// N = 6
// A[] = {1, 2, 4, 5, 8, 10}
// X = 9
// Output:
// 5

// Input:
// N = 7
// A[] = {1, 2, 2, 2, 5, 7, 9}
// X = 2
// Output:
// 4

const arr = [1, 2, 4, 5, 8, 10];
const X = 9;

const smallerElemCount = (arr, X) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > X) {
      return i;
    }
  }
  return X;
};
smallerElemCount(arr, X);
