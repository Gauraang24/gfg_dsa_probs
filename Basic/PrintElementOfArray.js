//Print Element of Array

// Given an array arr of size n, print all its elements space-separated.
// Note: You don't need to move to the next line after printing all elements of the array (space-separated)

// Input:
// n = 5
// arr[] = {1, 2, 3, 4, 5}
// Output: 1 2 3 4 5

const arr = [1, 2, 3, 4, 5];

const print = (arr) => {
  let value = "";
  for (let i = 0; i < arr.length; i++) {
    value = value + arr[i] + " ";
  }
  return value;
};

print(arr);
