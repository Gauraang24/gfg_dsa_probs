//Third Largest Element

// Given an array of distinct elements. Find the third largest element in it.

// Suppose you have A[] = {1, 2, 3, 4, 5, 6, 7}, its output will be 5 because it is the 3 largest element in the array A.

/*
Example 1:
Input:
N = 5
A[] = {2,4,1,3,5}
Output: 3

Example 2:
Input:
N = 2
A[] = {10,2}
Output: -1
*/

const array = [2, 4, 1, 3, 5];

const thirdLargest = (arr) => {
  let largestNum = 2;
  let secondLargestNum = 1;
  let thirdLargestNum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > thirdLargest) {
      console.log(arr[i]);
      thirdLargestNum = arr[i];
    }
    if (arr[i] > secondLargestNum) {
      console.log(arr[i]);
      thirdLargestNum = secondLargestNum;
      secondLargestNum = arr[i];
    }
    if (arr[i] > largestNum) {
      console.log(arr[i]);
      secondLargestNum = largestNum;
      largestNum = arr[i];
    }
  }

  console.log(largestNum, secondLargestNum, thirdLargestNum);
};

thirdLargest(array);
