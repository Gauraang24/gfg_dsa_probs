// S = pqr.mno
// Output: mno.pqr

const str = "abc.def.ghi.jkl.mno";

const wordReverse = (str) => {
  const split = str.split(".");
  let reversedArr = [];
  for (let i = split.length - 1; i >= 0; i--) {
    reversedArr.push(split[i]);
  }
  console.log(reversedArr.join("."));
  return reversedArr;
};

wordReverse(str);
