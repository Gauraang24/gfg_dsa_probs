// Find Index

// Given an unsorted array arr[] of n integers and a key which is present in this array. You need to write a program to find the start index( index where the element is first found from left in the array ) and end index( index where the element is first found from right in the array ).(0 based indexing is used)
// If the key does not exist in the array then return -1 for both start and end index in this case.

// Input:
// n = 6
// arr = { 6, 5, 4, 3, 1, 2 }
// key = 4
// Output:  {2, 2}
// Explanation:
// 4 appears first time and last time at index 2.

// Input:
// n = 6
// arr[] = { 1, 2, 3, 4, 5, 5 }
// key = 5
// Output:  {4, 5}
// Explanation:
// 5 appears first time at index 4 and appears last time at index 5.
// (0 based indexing)

const arr = [6, 5, 4, 3, 1, 2];
const key = 4;

const findIndex = (arr, key) => {
  arr.sort();
  let firstIndex = 0;
  let lastIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (key === arr[i]) {
      if (firstIndex === 0) {
        firstIndex = i;
      }
      lastIndex = i;
    }
  }
  console.log("firstLast Index", firstIndex, lastIndex);
};
findIndex(arr, key);

//some problem with geekForgeeks page
