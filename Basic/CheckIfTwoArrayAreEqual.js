// Check If Two Arrays Are Equal

// Given two arrays A and B of equal size N, the task is to find if given arrays are equal or not. Two arrays are said to be equal if both of them contain same set of elements, arrangements (or permutation) of elements may be different though.
// Note : If there are repetitions, then counts of repeated elements must also be same for two array to be equal.

/*

Example 1:
Input:
N = 5
A[] = {1,2,5,4,0}
B[] = {2,4,5,0,1}
Output: 1
Explanation: Both the array can be 
rearranged to {0,1,2,4,5}
Example 2:

Input:
N = 3
A[] = {1,2,5}
B[] = {2,4,15}
Output: 0
Explanation: A[] and B[] have only 
one common value.

*/

const arr1 = [1, 2, 5, 4, 0];
const arr2 = [2, 4, 5, 0, 1];
const n = 5;

const isSimilarArray = (arr1, arr2, n) => {
  arr1.sort();
  arr2.sort();

  for (let i = 0; i < n; i++) {
    if (arr1[i] !== arr2[i]) {
      return 0;
    }
  }
  return 1;
};

isSimilarArray(arr1, arr2, n);
