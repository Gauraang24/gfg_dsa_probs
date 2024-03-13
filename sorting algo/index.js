//Bubble Sort

function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j+1]
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

//Selection Sort

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      console.log(
        "J =",
        j,
        "minIndex =",
        minIndex,
        "arr[j] :",
        arr[j],
        " < ",
        "arr[minIndex] :",
        arr[minIndex]
      );
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
      console.log("minIndex---", minIndex);
    }
    // Swap arr[i] and arr[minIndex]
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}
/*
[5,4,3,2,1]
i=0  

minIndex = 0
j=1  minIndex = 0  arrr[j] : 4 < arr[minIndex] : 5 
minIndex = 1
j=2 minIndex = 1 arr[j] :3 < arr[minIndex] : 4
minIndex = 2
j=3 minIndex  = 2 arr[j]:2 < arr[minIndex] : 3
minIndex = 3
*/

//Insertion Sort

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

//Merge Sort

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

//Quick Sort

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot).concat(quickSort(right));
}

//Heap Sort

function heapSort(arr) {
  buildMaxHeap(arr);
  let n = arr.length;

  for (let i = arr.length - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    n--;
    maxHeapify(arr, 0, n);
  }
  return arr;
}

function buildMaxHeap(arr) {
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    maxHeapify(arr, i, arr.length);
  }
}

function maxHeapify(arr, i, n) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    maxHeapify(arr, largest, n);
  }
}
