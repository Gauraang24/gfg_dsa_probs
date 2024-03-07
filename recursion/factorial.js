function factorial(n) {
  var res = 1,
    i;
  for (i = 2; i <= n; i++) res *= i;
  return res;
}

const recursiveFactorialFunction = (n) => {
  if (n == 0) return 1;
  return n * factorial(n - 1);
};

// const terniaryRecursiveFactorialFunction = () => {
//   // single line to find factorial
//   return {
//     (n == 1 || n == 0) ? 1 : n * factorial(n - 1)
//   }
// };

recursiveFactorialFunction(4);
factorial(4);
terniaryRecursiveFactorialFunction(2);
