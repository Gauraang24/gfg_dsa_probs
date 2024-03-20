// Count Odd Even

// Given an array A[] of N elements. The task is to return the count of the number of odd and even elements in the array.

/*
Example:
Input:
N = 5
A[] = 1 2 3 4 5
Output:
3 2
Explanation:
There are 3 odd elements (1, 3, 5)
and 2 even elements (2 and 4).
*/

const arr = [1, 2, 3, 4, 5, 6, 7];

const oddEven = (arr) => {
  let odd = 0;
  let even = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even = even + 1;
    } else {
      odd = odd + 1;
    }
  }
  return odd, even;
};
oddEven(arr);
