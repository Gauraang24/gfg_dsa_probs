// Given a sorted array Arr of size N and a value X, find the number of array elements less than or equal to X and elements more than or equal to X.

/*

Example 1:
Input:
N = 7, X = 0
Arr[] = {1, 2, 8, 10, 11, 12, 19}
Output: 0 7
Explanation: There are no elements less or
equal to 0 and 7 elements greater or equal
to 0.

Example 2:
Input:
N = 7, X = 5
Arr[] = {1, 2, 8, 10, 11, 12, 19}
Output: 2 5
Explanation: There are 2 elements less or
equal to 5 and 5 elements greater or equal
to 5.

*/

const arr = [3, 3, 3];

const x = 3;

const SmallestLargest = (arr, x) => {
  let smallerElem = [];
  let greaterElem = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= x) {
      smallerElem.push(arr[i]);
    } else if (arr[i] <= x) {
      greaterElem.push(arr[i]);
    }
  }
  console.log(greaterElem.length, smallerElem.length);
  return [greaterElem.length, smallerElem.length];
};

SmallestLargest(arr, x);
