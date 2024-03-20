// Given an array arr of size n, swap the kth element from the beginning with kth element from the end.

/*
Example 1:
Input:
n = 8
k = 3
arr[] = {1, 2, 3, 4, 5, 6, 7, 8}
Output: {1, 2, 6, 4, 5, 3, 7, 8}
Explanation:
3rd element from beginning is 3 and from end is 6.
Example 2:

Input:
n = 5
k = 2
arr[] = {5, 3, 6, 1, 2}
Output: {5, 1, 6, 3, 2}
Explanation:
2nd element from beginning is 3 and from end is 1.
*/

const arr = [5, 3, 6, 1, 2];
const k = 1;

const swapElem = (arr, k) => {
  let K = k - 1;
  [arr[K], arr[arr.length - (K + 1)]] = [arr[arr.length - (K + 1)], arr[K]];

  return arr;
};

swapElem(arr, k);
