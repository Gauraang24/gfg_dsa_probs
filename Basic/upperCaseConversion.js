// UpperCase Conversion

// Given a string str, convert the first letter of each word in the string to uppercase.

/*
Example 1:

Input:
str = "i love programming"
Output: "I Love Programming"
Explanation:
'I', 'L', 'P' are the first letters of 
the three words.
*/

const string = "i love programming";

const upperCase = (str) => {
  const array = string.split(" ");
  const capitalised = [];

  for (let i = 0; i < array.length; i++) {
    const firstletter =
      array[i].slice(0, 1).toUpperCase() +
      array[i].slice(1, array[i].length + 1);
    capitalised.push(firstletter);
  }

  return capitalised.join(" ");
};
upperCase(string);
