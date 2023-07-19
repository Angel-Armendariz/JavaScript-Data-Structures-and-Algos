//Let's go through three common sorting algorithms: Bubble Sort, Selection Sort, and Quick Sort.

/*

Bubble Sort: Bubble Sort is the simplest sorting algorithm that repeatedly steps through the list, 
compares adjacent elements and swaps them if they are in the wrong order. 
The pass through the list is repeated until the list is sorted.

*/

function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            // If the element found is greater than the next element, then swap them
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}

let arr = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(arr)); // [11, 12, 22, 25, 34, 64, 90]

/*

Time Complexity: Bubble Sort has a worst-case and average time complexity of O(n^2), where n is the number of items being sorted.

Selection Sort: The selection sort algorithm sorts an array by repeatedly finding the minimum element from unsorted part and putting it at the beginning. 
The algorithm maintains two subarrays in a given array.

*/

function selectionSort(arr2) {
    let len = arr2.length;
    for (let i = 0; i < len; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr2[j] < arr2[min]) {
                min=j; 
            }
         }
         if (min != i) {
             // Swapping the elements
             let tmp = arr2[i]; 
             arr2[i] = arr2[min];
             arr2[min] = tmp;      
        }
    }
    return arr2;
}

let arr2 = [64, 25, 12, 22, 11];
console.log(selectionSort(arr2)); // [11, 12, 22, 25, 64]

/*

Time Complexity: Selection Sort has a worst-case and average time complexity of O(n^2), where n is the number of items being sorted.

Quick Sort: QuickSort is a divide-and-conquer method for sorting. 
It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, 
according to whether they are less than or greater than the pivot.

*/

function quickSort(arr3, low = 0, high = arr3.length - 1) {
    let pivotIndex;
    if (arr3.length > 1) {
        pivotIndex = partition(arr3, low, high);

        // Recursively apply the same logic to the left and right subarrays
        if (low < pivotIndex - 1) { // More elements on the left side of the pivot
            quickSort(arr3, low, pivotIndex - 1);
        }
        if (pivotIndex < high) { // More elements on the right side of the pivot
            quickSort(arr3, pivotIndex, high);
        }
    }
    return arr3;
}

function partition(arr3, low, high) {
    const pivot = arr3[Math.floor((low + high) / 2)]; // Middle element
    let i = low; // Left pointer
    let j = high; // Right pointer
    while (i <= j) { // While the two pointers do not meet
        // Continue moving the left pointer until a number larger than the pivot is found
        while (arr3[i] < pivot) {
            i++;
        }
        // Continue moving the right pointer until a number smaller than the pivot is found
        while (arr3[j] > pivot) {
            j--;
        }
        // If the left pointer is less than or equal to the right pointer, then swap elements
        if (i <= j) {
            [arr3[i], arr3[j]] = [arr3[j], arr3[i]]; // Swap numbers
            i++;
            j--;
        }
    }
    return i;
}

let arr3 = [10, 7, 8, 9, 1, 5];
console.log(quickSort(arr3)); // [1, 5, 7, 8, 9, 10]

/*

Time Complexity: The worst-case time complexity of QuickSort is O(n^2), but in practice, 
QuickSort is considerably faster because its inner loop can be efficiently implemented on most architectures, 
and in most real-world data, it performs well in average-case scenario which is O(n log n).

*/
