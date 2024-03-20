// Longest Common Prefix in an Array
// N = 4
// arr[] = {geeksforgeeks, geeks, geek,
//          geezer}
//outPut = "gee"

const arr = ["geeksforgeeks", "geeks", "geek", "geezer"];

const prefixChecker = (arr) => {
  const firstItem = arr[0].toLowerCase().split("");

  for (let i = 0; i < arr.length; i++) {
    const ithElem = arr[i].toLowerCase().split("");
    // console.log("ithElem", ithElem);
    if (firstItem[i] !== ithElem[i]) {
      const newN = firstItem.splice(i, 1);
      console.log("newN", newN);
    }
  }
};

prefixChecker(arr);

//incomplete
