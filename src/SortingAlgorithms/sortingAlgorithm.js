// Merge Sort with help of clementmihailescu
export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      animations.push([i, j]);
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      animations.push([i, i]);
      animations.push([i, i]);
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      animations.push([j, j]);
      animations.push([j, j]);
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }


// Bubble Sort
  export function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    return bubbleSort(array, animations);
  }

  function bubbleSort(arr,animations){
    for(var i=1;i<=arr.length-1;i++){
        for(var j=0;j<arr.length-i;j++){
            if(arr[j+1]<arr[j]){
                animations.push([j,j+1,arr[j],arr[j+1]]);
                var temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp   
            }
        }
    }
    console.log(animations)
    return animations;
  }


//Quick Sort
  export function getQuickSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  return QuickSort(array,0,array.length-1, animations);
}
function QuickSort(arr,lo,hi,animations){
    if(lo>=hi){
        return;
    }
    var pivot = arr[hi];
    var pi = partition(arr,pivot,lo,hi,animations)
    QuickSort(arr,lo,pi-1,animations);
    QuickSort(arr,pi+1,hi,animations);
    return animations;
}

function partition(arr, pivot,lo,hi,animations) {
    var i = lo, j = lo;
    while (i <= hi) {
      if (arr[i] <= pivot) {
        animations.push([i,j,arr[i],arr[j]])
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j++;
      } else {
        i++;
      }
    }
    return (j - 1);
  }

  //Selection Sort
  export function getSelectionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    return selectionSort(array, animations);
  }

  function selectionSort(arr,animations){
    for(var i=0;i<arr.length-1;i++){
        var min = i;
        for(var j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min = j;
            }
        }
        animations.push([i,min,arr[i],arr[min]])
        var temp = arr[i];
        arr[i] = arr[min];
        arr[min] =temp;
    }
    return animations;
  }


  //Insertion sort
  export function getInsertionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    return insertionSort(array, animations);
  }

  function insertionSort(arr,animations){
    for(var i=1;i<arr.length;i++){
        for(var j=i-1;j>=0;j--){
            if(arr[j]>arr[j+1]){
                animations.push([j,j+1,arr[j],arr[j+1]])
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] =temp;
            }else{
                break;
            }
        }
    }
    return animations;
  }

