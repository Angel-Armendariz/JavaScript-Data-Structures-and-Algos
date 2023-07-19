/*

Searching algorithms are designed to check for an element or retrieve an element from any data structure where it is stored. 
Here are a few examples of some common searching algorithms using JavaScript:

Linear Search:
Linear search is the simplest searching algorithm that traverses through the array sequentially until the desired element is found.

*/

function linearSearch(arr, element){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == element){
            return i; // return the index of the element
        }
    }
    return -1; // return -1 if the element is not found
}

let arr = [2, 3, 4, 10, 40];
console.log(linearSearch(arr, 10));  // Output: 3
console.log(linearSearch(arr, 50));  // Output: -1

/*

Binary Search:
Binary search is a much faster search algorithm than linear search. 
It works on the principle of divide and conquer. For this algorithm to work properly, the data collection should be in the sorted form. 
The binary search finds a mid element in each step and can go to left or right depending on the condition.

*/

function binarySearch(arr2, element){
    let start = 0, end = arr2.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        // Check if element is present at mid
        if (arr2[mid] === element){
            return mid;
        } 
        // If element greater, ignore left half
        if (arr2[mid] < element){
            start = mid + 1;
        } 
        // If element is smaller, ignore right half
        else {
            end = mid - 1;
        }
    }
    return -1; // return -1 if the element is not found
}

let arr2 = [2, 3, 4, 10, 40];
console.log(binarySearch(arr2, 10));  // Output: 3
console.log(binarySearch(arr2, 50));  // Output: -1

/*

In the linear search algorithm, we're just iterating over the array from start to finish until we find the desired element, so its time complexity is O(n). 
On the other hand, the binary search algorithm divides the array into two halves in each step, so its time complexity is O(log n).

*/