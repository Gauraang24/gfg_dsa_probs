//Remove Spaces

// Given a string, remove spaces from it.

// Example 1:
// Input:
// S = "geeks  for geeks"
// Output: geeksforgeeks
// Explanation: All the spaces have been
// removed.

// Example 2:
// Input:
// S = "    g f g"
// Output: gfg
// Explanation: All the spaces including
// the leading ones have been removed.

const input = "    g f g";

const handleSpace = (input) => {
  return input.split(" ").join("");
};

handleSpace(input);
