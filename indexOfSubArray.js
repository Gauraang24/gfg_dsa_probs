//Find Indexes of a subarray with given sum

const arr = [1];

const subarraySum = (arr, n, s) => {
  for (let i = 0; i < arr.length + 1; i++) {
    let total = s - arr[i];
    if (s - arr[0] === 0) {
      console.log([1, 0]);
      return [1, 0];
    }

    let subArr = [];
    for (let j = i + 1; j < arr.length + 1; j++) {
      if (total >= 0) {
        total = total - arr[j];
        if (total === 0) {
          console.log(i + 1, j + 1);
          return [i + 1, j + 1];
        }
      }
    }
    subArr = [];
    total = s - arr[i];
  }
  console.log([0]);
  return -1;
};
subarraySum(arr, 5, 0);
//output 2 4
