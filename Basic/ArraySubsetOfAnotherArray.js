//Check If array2 is subset of array1

// Given two arrays: a1[0..n-1] of size n and a2[0..m-1] of size m, where both arrays may contain duplicate elements. The task is to determine whether array a2 is a subset of array a1. It's important to note that both arrays can be sorted or unsorted. Additionally, each occurrence of a duplicate element within an array is considered as a separate element of the set.

/*
Example 1:
Input:
a1[] = {11, 7, 1, 13, 21, 3, 7, 3}
a2[] = {11, 3, 7, 1, 7}
Output:
Yes
Explanation:
a2[] is a subset of a1[]

Example 2:
Input:
a1[] = {1, 2, 3, 4, 4, 5, 6}
a2[] = {1, 2, 4}
Output:
Yes
Explanation:
a2[] is a subset of a1[]

Example 3:
Input:
a1[] = {10, 5, 2, 23, 19}
a2[] = {19, 5, 3}
Output:
No
Explanation:
a2[] is not a subset of a1[]
*/

const arr1 = [11, 7, 1, 13, 21, 3, 7, 3];
const arr2 = [11, 3, 7, 1, 7, 69];

const subSet = (arr1, arr2) => {
  const frequencyCounter = {};
  for (const num of arr1) {
    frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
  }

  for (const num of arr2) {
    if (!frequencyCounter[num] || frequencyCounter[num] === 0) {
      return false;
    } else {
      frequencyCounter[num]--;
    }
  }
  return true;
};

subSet(arr1, arr2);
