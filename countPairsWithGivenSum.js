// N = 4, K = 6
// arr[] = {1, 5, 7, 1}
// Output: 2

const arr = [1, 1, 1, 1];
const k = 2;

const countPair = (arr, k) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) {
        newArr.push([arr[i], arr[j]]);
      }
    }
  }
  return newArr.length;
};

countPair(arr, k);

//Not Optimised
