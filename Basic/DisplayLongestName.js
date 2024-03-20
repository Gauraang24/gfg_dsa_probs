//Display Longest Name

// Given a list of names, display the longest name. If there are multiple names of the longest size then return the first occurring name .

/*
Example1 :
Input:
n = 5
names[] = { "Geek", "Geeks", "Geeksfor", "GeeksforGeek", "GeeksforGeeks" }
Output: GeeksforGeeks
Explanation: name "GeeksforGeeks" has maximum length among all names. 

Example2 :
Input:
n = 4
names[] = { "Apple", "Mango", "Orange", "Banana" }
Output: Orange
Explanation: names "Orange" and "Banana" both have maximum length among all names but Orange comes first so answer will be "Orange". 
*/

const arr = ["Apple", "Mango", "Orange", "Banana"];

function longestName(arr) {
  let count = 0;
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > count) {
      count = arr[i].length;
      index = i;
    }
  }
  return arr[index];
}
longestName(arr);
