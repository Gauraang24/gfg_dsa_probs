//Printing the Left element

// Given a array of length N, at each step it is reduced by 1 element. In the first step the maximum element would be removed, while in the second step minimum element of the remaining array would be removed, in the third step again the maximum and so on. Continue this till the array contains only 1 element. And find the final element remaining in the array.

/*
Example 1:
Input:
N = 7
A[] = {7, 8, 3, 4, 2, 9, 5}
Ouput:
5
Explanation:
In first step '9' would be removed, in 2nd step
'2' will be removed, in third step '8' will be
removed and so on. So the last remaining
element would be '5'.  


Example 2:
Input:
N = 8
A[] = {8, 1, 2, 9, 4, 3, 7, 5}
Ouput:
4
*/

const array = [7, 8, 3, 4, 2, 9, 5];

const printingTheLeftElem = (array, n) => {
  let sortedArr = array.sort();
  let method = "pop";

  for (let i = 0; i < n; i++) {
    console.log("whole array", sortedArr);
    if (sortedArr.length !== 1) {
      if (method === "pop") {
        sortedArr.pop();
        method = "shift";
      } else if (method === "shift") {
        sortedArr.shift();
        method = "pop";
      }
    }
  }
  return sortedArr[0];
};

printingTheLeftElem(array, 7);
