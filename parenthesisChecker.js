const parenthesis = {
  "(": ")",
  "{": "}",
  "[": "]",
};

// const checkParenthesis = (str) => {
//   let stack = [];

//   for (let i = 0; i < str.length; i++) {
//     if (parenthesis[str[i]] === undefined) {
//       console.log("parenthesis", parenthesis[str[i]], str[i]);
//       const index = stack.indexOf(parenthesis[str[i]]);
//       stack.splice(index, 1);
//     }
//     if (parenthesis[str[i]] !== undefined) {
//       // console.log("console", stack);
//       // console.log("002", parenthesis[str[i]]);
//       stack.push(str[i]);
//     }
//   }
//   console.log("stack test", stack);
//   return stack;
// };

// const checkParenthesis = (str) => {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
//       count = count + 1;
//     } else if (str[i] === ")" || str[i] === "]" || str[i] === "}") {
//       count = count - 1;
//     }
//   }
//   console.log("count", count);
//   return count === 0 ? "Balanced" : "UnBalanced";
// };

const checkParenthesis = (s) => {
  let stack = [];
  let parenthesis = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "[" || s[i] === "{" || s[i] === "(") {
      stack.push(parenthesis[s[i]]);
    } else {
      const index = stack.indexOf(s[i]);

      if (index === -1) {
        return console.log(" 04 false");
      } else {
        stack.splice(index, 1);
      }
      // console.log("Stalkkkk", stack.length);
      console.log("Stack length", stack.length, stack.length !== 0);
      return stack.length !== 0
        ? console.log("01F false")
        : console.log("01T true");
    }
  }
  return console.log("03 true");
};

checkParenthesis("{[()]}");

// const data = [1, 2, 3, 45, 6];

// data.splice(2, 1);
// console.log("data", data);
