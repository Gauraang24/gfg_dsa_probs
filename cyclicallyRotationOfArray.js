// Input:
// N = 5
// A[] = {1, 2, 3, 4, 5}
// Output:
// 5 1 2 3 4

const array = [1, 2, 3, 4, 5];

const cyclicallyRotate = (arr) => {
  const lastElem = arr.pop();
  arr.unshift(lastElem);

  return arr;
};

const cyclicallyRotate2 = (arr) => {
  for (let i = arr.length - 1; i < arr.length; i++) {}
};
cyclicallyRotate2(array);
