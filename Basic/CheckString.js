// Given a string, check if all its characters are the same or not.

/*
Example 1:
Input:
s = "geeks"
Output: False
Explanation: The string contains different
character 'g', 'e', 'k' and 's'.

Example 2:
Input: 
s = "gggg"
Output: True
Explanation: The string contains only one
character 'g'.
*/

const string = "ggdgg";

const checkSimilarChar = (str) => {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (!result.includes(str[i])) {
      result += str[i];
    }
  }

  return result.length === 1 ? true : false;
};

checkSimilarChar(string);
