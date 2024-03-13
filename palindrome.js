const palindrome = (str) => {
  let lowerCase = str.toLowerCase();
  let left = 0;
  let right = lowerCase.length - 1;
  for (let i = 0; i < lowerCase.length; i++) {
    if (lowerCase[left] === lowerCase[right]) {
      left = left + 1;
      right = right - 1;
    } else {
      return 0;
    }
  }
  return 1;
};

palindrome("abbbba"); //1 Palindrome
palindrome("abmcdbba"); //0 Not a palindrome
