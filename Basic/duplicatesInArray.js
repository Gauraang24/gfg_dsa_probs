// Given an array a of size N which contains elements from 0 to N-1, you need to find all the elements occurring more than once in the given array. Return the answer in ascending order. If no such element is found, return list containing [-1].

// Note: The extra space is only for the array to be returned. Try and perform all operations within the provided array.

/*
EXAMPLE NO.1

Input:
N = 4
a[] = {0,3,1,2}
Output: 
-1
Explanation: 
There is no repeating element in the array. Therefore output is -1.
*/

/*
EXAMPLE NO.2

Input:
N = 5
a[] = {2,3,1,2,3}
Output: 
2 3 
Explanation: 
2 and 3 occur more than once in the given array.
*/

const array = [2, 3, 1, 2, 3, 5, 5, 5, 44, 44, 1, 44, 1];
// output = 2,3

const duplicatesInArray = (array) => {
  const nonDuplicate = [];
  const presence = {};

  for (const num of array) {
    if (!presence[num]) {
      nonDuplicate.push(num);
      presence[num] = true;
    }
  }

  console.log("Non-duplicate array:", nonDuplicate, presence);
};

duplicatesInArray(array);
