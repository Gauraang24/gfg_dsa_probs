function insertionSort(arr) {
  for (let INDEX = 1; INDEX < arr.length; INDEX++) {
    let numberToInsert = arr[INDEX]; //number                     20
    let indx = INDEX - 1; //index                                 0

    while (indx >= 0 && arr[indx] > numberToInsert) {
      //0 > 0 && 8 > 20 = false
      arr[indx + 1] = arr[indx]; //number
      indx = indx - 1; //index -1                    //-1
    }
    arr[indx + 1] = numberToInsert; //number         //arr[0] = 20
  }
}
/*
numberToInsert= 20
indx = 0
indx >= 0 && arr[indx] > numberToInsert     0 > 0 && 8 > 20 = false
arr[indx + 1] = numberToInsert

*/

const arr = [8, 20, -2, 4, -6];
insertionSort(arr);
console.log(arr);

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let key = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > key) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = key;
//   }
//   return arr;
// }
