// Input :
// n = 7, k = 2
// a[] = {1, 7, 4, 3, 4, 8, 7}
// Output :
// 4
// Explanation :
// Both 7 and 4 occur 2 times. But 4 is first that occurs twice.
// As at index = 4, 4 has occurred twice whereas 7 appeared twice
// at index 6.

const arr = [1, 7, 4, 3, 4, 8, 7];

function test(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    obj = {
      ...obj,
      i: arr[i],
    };
    console.log("newObj", obj);
  }
}

test(arr);
