const missingNumber = (array, n) => {
  let total = 0;
  let indexTotal = (n * (n + 1)) / 2;

  for (let i = 0; i < array.length; i++) {
    total = total + array[i];
  }

  console.log(indexTotal - total);
  return indexTotal - total;
};

missingNumber([1, 2, 3, 5], 5);
