// N = 5
// Arr[] = {3, 2, 4, 6, 5}
// Output: Yes
// Explanation: a=3, b=4, and c=5 forms a
// pythagorean triplet.

const arr = [3, 8, 5];

const pythagoreanTriplet = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let z = i + 2; z < arr.length; z++) {
        console.log([arr[i], arr[j], arr[z]]);
        if (arr[i] ** 2 + arr[j] ** 2 === arr[z] ** 2) {
          console.log([arr[i], arr[j], arr[z]]);
          console.log("Yes");
          return "Yes";
        }
      }
    }
  }
  console.log("No");
  return "No";
};

pythagoreanTriplet(arr);
