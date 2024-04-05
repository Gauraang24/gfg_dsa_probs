//Missing Number

// Ritu has all numbers from 1 to n in an array arr of length n-1 except one number. You have to find which number, Ritu doesn't have from 1 to n.

// NOTE: Don't use Sorting

/*
Example 1:
Input:
n  =  4                                        
arr = {1, 4, 3}
Output: 2     
Explanation:
Ritu doesn't have number 2

Example 2:
Input:                        
n = 5
arr = {2, 5, 3, 1}
Output: 4
Explanation:
Ritu doesn't have number 4 in her collection
*/

const arr = [2, 5, 3, 1, 4, 6, 8];

const missingNum = (arr) => {
  let total = 0;
  let index = 1;

  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
    index = index + i + 2;
  }
  return total - index;
};

missingNum(arr);
