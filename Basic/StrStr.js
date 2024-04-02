// Your task is to implement the function strstr. The function takes two strings as arguments (s,x) and  locates the occurrence of the string x in the string s. The function returns an integer denoting the first occurrence of the string x in s (0 based indexing).

// Note: You are not allowed to use inbuilt function.

/*
Example 1:
Input:
s = GeeksForGeeks, x = Fr
Output: -1
Explanation: Fr is not present in the
string GeeksForGeeks as substring.

Example 2:
Input:
s = GeeksForGeeks, x = For
Output: 5
Explanation: For is present as substring
in GeeksForGeeks from index 5 (0 based
    indexing).
*/

const string = "GeeksForGeeks";
const x = "For";

const StrStr = (s, x) => {
  let y = [];
  for (let i = 0; i < s.length; i++) {
    console.log("s[i]", s[i]);

    for (let j = 0; j < x.length; j++) {
      if (s[i] === x[j]) {
        y.push(s[i]);
      }
    }
  }

  if (y.join("") === x) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    false;
  }
};

StrStr(string, x);

//incomplete
