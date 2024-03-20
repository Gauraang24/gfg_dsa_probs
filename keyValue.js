// Input:
// N = 6, X = 16
// Arr[] = {1, 4, 45, 6, 10, 8}
// Output: Yes
// Explanation: Arr[3] + Arr[4] = 6 + 10 = 16
const arr = [1, 4, 45, 6, 10, 8];
const x = 16;
const n = 6;

const keyValue = (arr, x) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === x) {
        // console.log(arr[i], arr[j]);
        return "Yes";
      }
    }
  }
};
keyValue(arr, x);

// Test Cases Passed:
// 164 /187
// Time Limit Exceeded

const hasPairWithSumRecursive = (arr, x, i = 0, j = 1) => {
  // Base case: if we reach the end of the array, return "No"
  if (i === arr.length - 1) {
    return "No";
  }

  // Base case: if j reaches the end of the array, move to the next i
  if (j === arr.length) {
    return hasPairWithSumRecursive(arr, x, i + 1, i + 2);
  }

  // If the sum of arr[i] and arr[j] equals x, return "Yes"
  if (arr[i] + arr[j] === x) {
    return "Yes";
  }

  // Otherwise, increment j and continue
  return hasPairWithSumRecursive(arr, x, i, j + 1);
};

const data = hasPairWithSumRecursive(arr, x);
console.log("data", data);
