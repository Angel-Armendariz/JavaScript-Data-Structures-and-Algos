/*
An array is a fundamental data structure, used to store multiple values in a single variable. Arrays in JavaScript are dynamic and can grow or shrink as needed. 
They can also store elements of different types in the same array.

Key concepts:

Index: Each element in an array has a unique identifier called its index or position, allowing quick access to the element. 
In JavaScript, like in most programming languages, array indices start at 0.

Length: This refers to the number of elements in the array. The length property of a JavaScript array returns the number of elements in the array.

Element: Each individual item in an array is called an element. Elements in a JavaScript array can be of different types (e.g., number, string, object).

Multidimensional arrays: Arrays can have more than one dimension. A two-dimensional array is like a matrix with rows and columns. Higher dimensions are also possible.

*/

// Declare and initialize an array with five elements: 10, 20, 30, 40, and 50.
let array = [10, 20, 30, 40, 50]; 

// Start a for loop. The initialization condition sets the iterator 'i' to 0. 
// The termination condition is 'i' less than the length of the array. 
// Each time the loop runs, the iterator 'i' is increased by 1.
for(let i = 0; i < array.length; i++) {

    // In each iteration of the loop, this line is executed. It prints out a string to the console.
    // The string contains a fixed part ("Element at index ") and a variable part.
    // The variable part is the value of 'i' (representing the current index in the array) and the value of the array at that index.
    // The ${} syntax is used to insert these variable parts into the string.
    console.log(`Element at index ${i}: ${array[i]}`); 
}


/*
In this example, an array of integers is declared and initialized. The elements are then accessed using their indices in a for loop.

However, it's important to note that operations like insertion, deletion, or searching can be costly in terms of time complexity, 
as they may involve shifting elements or scanning the entire array.

For example, if you need to insert an element at the beginning of an array, all the existing elements have to be shifted to make room, 
which takes O(n) time where n is the length of the array. For this reason, other data structures (like linked lists, trees, or hash tables) 
might be more efficient for certain tasks. But for tasks involving heavy computation on indexed data, arrays are very efficient because they allow direct access to any element.

*/

/*
In JavaScript, you can create multidimensional arrays, with the most common being a two-dimensional array (essentially an array of arrays). 
Here is an example of a 2D array representing a grid of numbers.
*/

// Declare and initialize a 2D array (also known as a matrix)
let matrix = 
[
    [1, 2, 3],  // The first row of the matrix
    [4, 5, 6],  // The second row of the matrix
    [7, 8, 9]   // The third row of the matrix
]; 

// Iterate over each row of the matrix
for(let i = 0; i < matrix.length; i++) {
    // Within each row, iterate over each column
    for(let j = 0; j < matrix[i].length; j++) {
        // Print out the current element's location (row i, column j) and its value
        console.log(`Element at row ${i}, column ${j}: ${matrix[i][j]}`); // accessing elements
    }
}


/*

Here's what's happening in the code above:

1. We declare a variable `matrix` and initialize it as a 2D array. It's essentially an array that contains other arrays as its elements. 
Each sub-array represents a row in the matrix.

2. The outer `for` loop iterates over each sub-array (or row).

3. The inner `for` loop iterates over each element within a particular sub-array (or each element in a row).

4. `matrix[i][j]` accesses the element at the `i`th row and the `j`th column of the matrix. 
The first index `[i]` selects the sub-array, and the second index `[j]` selects the element within that sub-array.

This allows you to store and access elements in a two-dimensional structure. 
This concept can be extended to more dimensions by adding more levels of arrays and more indices to access them. 
For example, `matrix[i][j][k]` would access the `k`th element of the `j`th array in the `i`th array of a 3D array.

*/