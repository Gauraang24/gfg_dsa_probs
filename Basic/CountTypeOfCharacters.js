//Count Type Of Characters

// Given a string S, write a program to count the occurrence of Lowercase characters, Uppercase characters, Special characters and Numeric values in the string.
// Note: There are no white spaces in the string.

/*
Example 1:
Input:
S = "#GeeKs01fOr@gEEks07"
Output:
5
8
4
2
Explanation: There are 5 uppercase characters,
8 lowercase characters, 4 numeric characters
and 2 special characters.

Example 2:
Input: 
S = "*GeEkS4GeEkS*"
Output:
6
4
1
2
Explanation: There are 6 uppercase characters,
4 lowercase characters, 1 numeric characters
and 2 special characters.
*/

const string = "#GeeKs01fOr@gEEks07";

const countCharacters = (str) => {
  let capLetter = 0;
  let smallLetter = 0;
  let number = 0;
  let specialChar = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      capLetter++;
    } else if (str[i] >= "a" && str[i] <= "z") {
      smallLetter++;
    } else if (str[i] >= 0 && str[i] <= 9) {
      number++;
    } else {
      specialChar++;
    }
  }

  console.log(capLetter);
  console.log(smallLetter);
  console.log(number);
  console.log(specialChar);
};

countCharacters(string);
