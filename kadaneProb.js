// N = 5
// Arr[] = {1,2,3,-2,5}
// Output:
// 9

const arr = [1, 2, 3, -2, 5];

const kadane = (arr) => {
  let total = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[0]) {
      //   console.log("totalinside", total);
      console.log("arr[i]", arr[i]);
      total = total + arr[i];
    } else {
      console.log("-1");
    }
  }
  console.log("total", total);
};

kadane(arr);
