//Split String

// Given a string S which consists of alphabets , numbers and special characters. You need to write a program to split the strings in three different strings S1, S2 and S3 such that the string S1 will contain all the alphabets present in S , the string S2 will contain all the numbers present in S and S3 will contain all special characters present in S.  The strings S1, S2 and S3 should have characters in same order as they appear in input.

/*
Example 1:
Input:
S = geeks01for02geeks03!!!
Output:
geeksforgeeks
010203
!!!
Explanation: The output shows S1, S2 and S3.

Example 2:
Input:
S = **Docoding123456789everyday##
Output:
Docodingeveryday
123456789
**##
*/

const S = "geeks01for02geeks03!!!";

const splitString = (s) => {
  let letters = "";
  let numbers = "";
  let specialChar = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= "A" && s[i] <= "Z") {
      letters += s[i];
    } else if (s[i] >= "a" && s[i] <= "z") {
      letters += s[i];
    } else if (s[i] >= 0 && s[i] <= 9) {
      numbers += s[i];
    } else {
      specialChar += s[i];
    }
  }

  console.log(letters);
  console.log(numbers);
  console.log(specialChar);
};

splitString(S);
