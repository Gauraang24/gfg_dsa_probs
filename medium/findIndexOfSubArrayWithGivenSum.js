// Given an unsorted array A of size N that contains only non negative integers, find a continuous sub-array that adds to a given number S and return the left and right index(1-based indexing) of that subarray.

// In case of multiple subarrays, return the subarray indexes which come first on moving from left to right.

// Note:- You have to return an ArrayList consisting of two elements left and right. In case no such subarray exists return an array consisting of element -1.

/*
Example 1:
Input:
N = 5, S = 12
A[] = {1,2,3,7,5}
Output: 2 4
Explanation: The sum of elements 
from 2nd position to 4th position 
is 12.
Example 2:
Input:
N = 10, S = 15
A[] = {1,2,3,4,5,6,7,8,9,10}
Output: 1 5
Explanation: The sum of elements 
from 1st position to 5th position
is 15.
*/

const array = [1, 2, 3, 7, 5];
const s = 12;

const subarry = (arr, s) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = arr[i];
    // console.log("total", total);
    for (let j = i + 1; j < arr.length; j++) {
      total = total + arr[j];
      if (total === s) {
        console.log(i + 1, j + 1);
        return [i + 1, j + 1];
      }
    }
  }
};

subarry(array, s);
