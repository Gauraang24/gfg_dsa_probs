//Two Greater Element

// Given an array of N distinct elements, the task is to find all elements in array except two greatest elements in sorted order.

/*

Example 1:
Input : 
a[] = {2, 8, 7, 1, 5}
Output :
1 2 5 
Explanation :
The output three elements have two or
more greater elements. 

Example 2:
Input :
a[] = {7, -2, 3, 4, 9, -1}
Output :
-2 -1 3 4

*/

const arr = [7, -2, 3, 4, 9, -1];

function TwoGreaterElem(arr) {
  arr.sort();
  console.log("Test", arr.splice(0, arr.length - 2));
}

TwoGreaterElem(arr);
