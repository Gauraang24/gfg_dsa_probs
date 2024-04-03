//Rotating an array

// Given an array of size n. The task is to rotate array by d elements where d ≤ n.

/*
Example 1:
Input:
n = 7
arr[] = {-1, -2, -3, 4, 5, 6, 7}
d = 2
Output: {-3, 4, 5, 6, 7, -1, -2}
Explanation: 
Rotate by 1: [-2, -3, 4, 5, 6, 7, -1]
Rotate by 2: [-3, 4, 5, 6, 7, -1, -2]

Example 2:
Input:
n = 4
arr[] = {1, 3, 4, 2}
d = 3
Output: {2, 1, 3, 4}
*/

const arr = [1, 3, 4, 2];
const d = 3;

const rotation = (arr, d) => {
  for (let i = 0; i < d; i++) {
    const removedElem = arr.shift();
    arr.push(removedElem);
  }
  return arr;
};

rotation(arr, d);
