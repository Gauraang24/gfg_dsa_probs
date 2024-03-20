// Input:
// N = 6
// A[] = {3, 2, 1, 56, 10000, 167}
// Output: 1 10000
// Explanation: minimum and maximum elements of array are 1 and 10000.

const array = [2];

const minMaxElem = (arr) => {
  let min = Infinity;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      min = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min, max;
};

minMaxElem(array);
