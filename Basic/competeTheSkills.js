// Compete the skills

// A and B are good friend and programmers. They are always in a healthy competition with each other. They decide to judge the best among them by competing. They do so by comparing their three skills as per their values. Please help them doing so as they are busy.

// Set for A are like [a1, a2, a3]
// Set for B are like [b1, b2, b3]

// Compare ith skill of A with ith skill of B
// if a[i] > b[i] , A's score increases by 1
// if a[i] < b[i] , B's score increases by 1
// if a[i] = b[i] , nothing happens

/*
Example 1:
Input : 
A = {4, 2, 7}
B = {5, 6, 3}
Output : 
1 2

Example 2:
Input : 
A = {4, 2, 7}
B = {5, 2, 8}
Output : 
0 2
*/

const A = [4, 2, 7];
const B = [5, 6, 3];

const competeTheSkills = (A, B) => {
  let AScore = 0;
  let BScore = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] > B[i]) {
      AScore++;
    } else if (A[i] < B[i]) {
      BScore++;
    }
  }

  return AScore, BScore;
};

competeTheSkills(A, B);

//Solution from editorial
/*
const to_upper = (str) => {
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        ans += String.fromCharCode(str[i].charCodeAt(0) - 32); //Converting each character to uppercase by subtracting 32 from its ASCII value.
    }
    return ans;
};
*/
