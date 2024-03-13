// N = 5, D = 2
// arr[] = {1,2,3,4,5}
// Output: 3 4 5 1 2

const arr = [1, 2, 3, 4, 5];
const rotation = 2;

// const rotateArr2 = (arr, rotation) => {
//   for (let i = 0; i < arr.length; i++) {
//     let indexAfterRotation = i - 1;
//     if (indexAfterRotation < 0) {
//       [arr[arr.length - (indexAfterRotation + 1)]] = [arr[i]];
//     } else {
//       arr[indexAfterRotation] = arr[i];
//     }
//   }
// };

const rotateArr = (arr, rotation) => {
  for (let i = 0; i < rotation; i++) {
    const firstElem = arr.shift();
    arr.push(firstElem);
  }
};

rotateArr2(arr, rotation);
