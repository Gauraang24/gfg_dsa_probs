// Given two strings A and B consisting of lowercase english characters. Find the characters that are not common in the two strings.

// Note :- Return the string in sorted order.

/*
Example 1:
Input:
A = geeksforgeeks
B = geeksquiz
Output: fioqruz
Explanation: 
The characters 'f', 'i', 'o', 'q', 'r', 'u','z' 
are either present in A or B, but not in both.

Example 2:
Input:
A = characters
B = alphabets
Output: bclpr
Explanation: The characters 'b','c','l','p','r' 
are either present in A or B, but not in both.
*/

const arr1 = "characters";
const arr2 = "alphabets";

const uncommonCharacters = (arr1, arr2) => {
  let commonString = "";
  for (let i = 0; i < arr1.length; i++) {
    if (!arr1.includes(arr2[i])) {
      commonString = commonString + arr2[i];
      console.log("array elem that are not common", arr2[i]);
    } else if (!arr2.includes(arr1[i])) {
      console.log("array elem that are not common in 2nd", arr1[i]);
      commonString = commonString + arr1[i];
    }
  }

  console.log("commonString", commonString);
};

uncommonCharacters(arr1, arr2);
