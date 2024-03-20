const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const x = 5;

const binarySearch = (arr, x) => {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  for (let i = 0; i < arr.length; i++) {
    if (arr[mid] === x) {
      console.log("your element is :", arr[mid]);
      return arr[mid];
    }
    if (x < arr[mid]) {
      end = mid - 1;
    }

    if (x > arr[mid]) {
      start = mid + 1;
    }

    mid = Math.floor((start + end) / 2);
  }
};
binarySearch(array, x);
