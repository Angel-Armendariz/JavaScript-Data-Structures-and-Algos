/*
Divide and Conquer is an algorithmic pattern that recursively breaks down a problem into two or more sub-problems 
of the same or related type until these become simple enough to be solved directly. 
The solutions to the sub-problems are then combined to give a solution to the original problem. 
The Divide and Conquer technique is the basis for many efficient algorithms including Binary Search, Merge Sort, Quick Sort, and others.

Let's illustrate this concept with two examples:

**1. Merge Sort:**

Merge Sort is a sorting algorithm that follows the divide and conquer paradigm. 
It works by dividing an unsorted list into n sublists, each containing one element, 
then repeatedly merging sublists to produce new sorted sublists until there is only one sublist remaining.
*/

function mergeSort(arr) {
    // Base case: if the array length is less than or equal to one, it's already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Split the array into two halves
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    // Recursively sort the two halves and merge them together
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    // Compare elements from the sorted arrays and add the smallest one to the result
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Concatenate any leftover elements
    return result.concat(left.slice(i)).concat(right.slice(j));
}

let arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr));  // Outputs: [3, 9, 10, 27, 38, 43, 82]

/*
The time complexity of Merge Sort is O(n log n) in all cases (worst, average, best) as the array is always divided in two halves and it takes linear time to merge two halves.

**2. Binary Search:**

Binary Search is a search algorithm that finds the position of a target value within a sorted array. 
It compares the target value to the middle element of the array; if they are unequal, 
the half in which the target cannot lie is eliminated and the search continues on the remaining half, 
again taking the middle element to compare to the target value, and repeating this until the target value is found.
*/

function binarySearch(arr2, x) {
    let low = 0, high = arr2.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr2[mid] === x) {  // Element found
            return mid;
        } else if (arr2[mid] < x) {  // Element can only be on the right
            low = mid + 1;
        } else {  // Element can only be on the left
            high = mid - 1;
        }
    }

    return -1;  // Element not found
}

let arr2 = [2, 3, 4, 10, 40];
let x = 10;
console.log(binarySearch(arr2, x));  // Outputs: 3
/*
The time complexity of Binary Search is O(log n) as in each step, the algorithm reduces the search space by half. 
The space complexity is O(1) in the iterative version above (it would be O(log n) for a recursive version due to the recursion stack).
*/