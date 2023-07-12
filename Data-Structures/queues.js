/*

A Queue is a type of data structure which follows the First-In-First-Out (FIFO) method. 
This means that the data that gets in first, gets access first, similar to a real-world queue or line (like at a ticket counter).

In JavaScript, you can use an array to implement a Queue.

*/

//Here's a basic example:

class Queue {
    constructor() {
        this.items = [];  // Initialize an empty array to hold the queue's items
    }

    // enqueue function
    enqueue(element) {   
        // Adding element to the end of the queue
        this.items.push(element);  
    }  

    // dequeue function 
    dequeue() {
        // Check if the queue is empty
        if(this.isEmpty()) 
            return "Underflow";  // If the queue is empty, there's nothing to remove
        // Removing element from the start of the queue
        return this.items.shift(); 
    }  

    // front function 
    front() { 
        // Check if the queue is empty
        if(this.isEmpty()) 
            return "No elements in Queue";  // If the queue is empty, there's no front element
        // Return the first element of the queue
        return this.items[0]; 
    }  

    // isEmpty function 
    isEmpty() {
        // Check if the queue is empty
        return this.items.length == 0; 
    }  
}

let queue = new Queue();  // Create a new Queue

queue.enqueue("Red");  // Add 'Red' to the queue
queue.enqueue("Blue");  // Add 'Blue' to the queue
queue.enqueue("Green");  // Add 'Green' to the queue

console.log(queue.front());  // Outputs: 'Red'
console.log(queue.dequeue());  // Outputs: 'Red'
console.log(queue.front());  // Outputs: 'Blue'
console.log(queue.isEmpty());  // Outputs: false


/*

In this code, a Queue class is defined with methods for adding (enqueueing) and removing (dequeuing) items, 
checking the front item, and checking if the queue is empty. 
It uses a JavaScript array to store the items, with the start of the array as the front of the queue. 
The enqueue operation uses the array's push method to add items at the end of the queue, 
and the dequeue operation uses the array's shift method to remove items from the front.

*/