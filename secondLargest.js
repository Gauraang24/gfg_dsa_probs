// Return Second Largest Element of an Array

const arr = [12, 35, 1, 10, 34, 1, 43, 234, 3, 56, 23, 12, 12, 54, 65];

const secondLargest = (arr) => {
  for (let i = arr.length; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr[1];
};
secondLargest(arr);
