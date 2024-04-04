//Convert a list of character into string

// Given a list of characters, merge all of them into a string.

/*
Example 1:
Input:
N = 13
Char array = g e e k s f o r g e e k s
Output: geeksforgeeks 
Explanation: combined all the characters
to form a single string.

Example 2:
Input:
N = 4
Char array = e e b a
Output: eeba
Explanation: combined all the characters
to form a single string.
*/

const array = ["g", "e", "e", "k", "s", "f", "o", "r", "g", "e", "e", "k", "s"];

const convert = (arr) => {
  let res = "";

  for (let i = 0; i < arr.length; i++) {
    res = res + arr[i];
  }

  //   console.log("result", res);
  return res;
};

const convert2 = (arr) => {
  return arr.join(""); //in-built function .join()
};

convert2(array);
