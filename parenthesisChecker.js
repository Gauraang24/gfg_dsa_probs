const parenthesis = {
  "(": ")",
  "{": "}",
  "[": "]",
};
let stackk = [];

// const checkParenthesis = (str)=>{
//     let newArr=[]
//     for(let i=0;i<str.length;i++){
//         if(parenthesis[str[i]] !== undefined && str[i] !== parenthesis[str[i]]){

//             newArr.push(parenthesis[str[i]])
//         }else{
//             console.log("else condition", str[i])
//             newArr.pop(str[i].string)
//         }

//     }
//         console.log("newArr", newArr)
// }

const checkParenthesis = (str) => {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    // console.log(
    //   "str[i] :",
    //   str[i],
    //   "parenthesis[str[i]] :",
    //   parenthesis[str[i]]
    // );

    if (parenthesis[str[i]] === undefined) {
      //   console.log("if condition", str[i]);
      console.log("str[i]", str[i]);
      stack.push(str[i]);
    }
    if (parenthesis[str[i]] !== undefined) {
      console.log("str[i]2nd", str[i]);
      //   console.log("if 2", stack);
      //   console.log("parenthesis[str[i]]", parenthesis[str[i]].toString());
      stack.pop(parenthesis[str[i]]);
    }
  }
};

checkParenthesis("{[()]}");
