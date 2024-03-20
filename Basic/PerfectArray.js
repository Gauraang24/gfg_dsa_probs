//Perfect Array

// Given an array arr of size n and you have to tell whether the arr is perfect or not. An array is said to be perfect if its reverse array matches the original array. If the arr is perfect then return True else return False.

// Example 1:
// Input :
// n = 5
// arr = {1, 2, 3, 2, 1}
// Output : PERFECT
// Explanation:
// Here we can see we have [1, 2, 3, 2, 1] if we reverse it we can find [1, 2, 3, 2, 1]
// which is the same as before.So, the answer is PERFECT.

// Example 2:
// Input :
// n = 5
// arr = {1, 2, 3, 4, 5}
// Output : NOT PERFECT
// Explanation:
// Here we can see we have [1, 2, 3, 4, 5] if we reverse it we find [5, 4, 3, 2, 1]
// which is the not same as before.So, the answer is NOT PERFECT.

const arr = [1, 2, 3, 2, 1];

const perfectArr = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    left = left + 1;
    right = right - 1;
    if (arr[left] !== arr[right]) {
      return false;
    }
  }
  return true;
};

perfectArr(arr);
