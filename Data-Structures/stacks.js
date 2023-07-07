/*

A stack is a linear data structure that follows the Last In First Out (LIFO) principle. 
In other words, the last element added to the stack will be the first one to be removed.

Stacks have two main operations:

Push: Adds an element to the top of the stack.
Pop: Removes an element from the top of the stack.
A stack can also include additional operations such as:

Peek or Top: Returns the top element of the stack.
isEmpty: Checks if the stack is empty.
Here's a simple implementation of a stack in JavaScript:

*/

// Define the Stack class
class Stack {
    // Stack constructor
    constructor() {
        this.items = [];  // Initialize an empty array to hold the stack's items
    }

    // Method to add an item to the top of the stack
    push(element) {
        this.items.push(element);  // Use the array's built-in push method to add the item
    }

    // Method to remove the top item from the stack
    pop() {
        // Before trying to remove an item, check if the stack is empty
        if (this.items.length == 0) {
            return "Underflow"; // Trying to remove an element from an empty stack
        }
        // Use the array's built-in pop method to remove and return the top item
        return this.items.pop();
    }

    // Method to view the top item in the stack without removing it
    peek() {
        // Return the last item in the array (the top of the stack)
        return this.items[this.items.length - 1];
    }

    // Method to check if the stack is empty
    isEmpty() {
        // Return true if the stack's array is empty, false otherwise
        return this.items.length == 0;
    }
}

// Create a new stack
let stack = new Stack();
// Push 10, 20, and 30 onto the stack
stack.push(10);
stack.push(20);
stack.push(30);
// Pop the top item off the stack and print it (should be 30)
console.log(stack.pop()); 
// Peek at the top item in the stack and print it (should be 20)
console.log(stack.peek());
// Check if the stack is empty and print the result (should be false)
console.log(stack.isEmpty()); 


/*

In this example:

The Stack class is used to create a new stack. The stack is implemented as an array of items.
The push method adds a new element to the top of the stack.
The pop method removes the top element of the stack. If the stack is empty, it returns the string "Underflow".
The peek method returns the top element of the stack without removing it.
The isEmpty method checks if the stack is empty by checking if the length of the items array is 0.

*/