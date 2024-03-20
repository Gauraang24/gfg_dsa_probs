//Print Alternate Element Of Array
// You are given an array A of size N. You need to print elements of A in alternate order (starting from index 0).

// Input:
// N = 4
// A[] = {1, 2, 3, 4}
// Output:
// 1 3

// Input:
// N = 5
// A[] = {1, 2, 3, 4, 5}
// Output:
// 1 3 5

const arr = [
  887, 778, 916, 794, 336, 387, 493, 650, 422, 363, 28, 691, 60, 764, 927, 427,
  173, 737, 212, 369, 568, 430, 783, 531, 863, 124, 68, 136, 930, 803, 23, 59,
  70, 168, 394, 457, 12, 43, 230, 374, 422, 920, 785, 538, 199, 325, 316, 371,
  414, 527,
];

const alternateElem = () => {
  let output = "";
  for (let i = 0; i < arr.length; i += 2) {
    output = output + arr[i] + " ";
  }
  console.log(output);
};
alternateElem(arr);
