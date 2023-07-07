/*
A linked list is a linear data structure where each element is a separate object, 
each containing data and one or two references pointing to the next and/or previous element in the sequence.

The starting point of the list is a reference to the first element, known as the "head". 
The last element has a reference to null, indicating the end of the list. The elements themselves are usually referred to as "nodes".

Here are some key concepts about linked lists:

Node: Each individual item in a linked list is a node, consisting of two parts: the data, and a reference (or 'link') to the next node in the sequence.

Head: The first node in the list.

Tail: The last node in the list. The tail node's reference points to null.

Next: Each node contains a reference to the next node in the list.

Here is a simple implementation of a singly linked list in JavaScript:

*/

// Define the Node class
class Node {
    // Node constructor
    constructor(data, next = null) {
        this.data = data;  // The data the node will hold
        this.next = next;  // The next node in the linked list
    }
}

// Define the LinkedList class
class LinkedList {
    // LinkedList constructor
    constructor() {
        this.head = null;  // Head of the list, start with no nodes (null)
    }

    // Method to insert a node at the beginning of the list
    insertAtBeginning(data) {
        let newNode = new Node(data);  // Create a new node with the data
        newNode.next = this.head;  // Point the new node's 'next' to the current head node
        this.head = newNode;  // Update the head of the list to the new node
        return this.head;  // Return the new head node
    }

    // Method to display the list
    display() {
        let nodes = [];  // Create an array to hold the nodes for displaying
        let currentNode = this.head;  // Start with the head node
        while (currentNode) {
            nodes.push(currentNode.data);  // Add the current node's data to the array
            currentNode = currentNode.next;  // Move on to the next node
        }
        return nodes.join(' -> ');  // Join the nodes' data into a string with ' -> ' between each node and return it
    }
}

let list = new LinkedList();  // Create a new LinkedList instance
list.insertAtBeginning('Red');  // Insert 'Red' at the beginning of the list
list.insertAtBeginning('Blue');  // Insert 'Blue' at the beginning of the list, shifting 'Red' down
list.insertAtBeginning('Green');  // Insert 'Green' at the beginning of the list, shifting 'Blue' and 'Red' down
console.log(list.display());  // Display the list, outputs: "Green -> Blue -> Red"


/*
In this example:

The Node class is used to create new nodes. Each node stores some data and a link to the next node (null by default).
The LinkedList class creates a new linked list. The list starts with a "head" of null because it's initially empty.
The insertAtBeginning method inserts a new node at the start of the list. 
It creates a new node, sets its next link to the current head (because it's going to be the new head), and then updates the list's head to the new node.
The display method prints out the list's elements. 
It starts at the head and follows the next links until it reaches the end of the list (i.e., a node with a next link of null).

*/


/*
A doubly linked list is similar to a linked list, but instead of each node only referencing the next node in the list, 
each node references both the next and the previous node. This allows for traversal in both directions but requires a bit more memory to store the additional references.

Here is a basic implementation of a doubly linked list in JavaScript:

*/

// Define the Node class for a doubly linked list
class Node {
    // Node constructor
    constructor(data, prev = null, next = null) {
        this.data = data;  // The data the node will hold
        this.prev = prev;  // Reference to the previous node in the list
        this.next = next;  // Reference to the next node in the list
    }
}

// Define the DoublyLinkedList class
class DoublyLinkedList {
    // DoublyLinkedList constructor
    constructor() {
        this.head = null;  // Head of the list, start with no nodes (null)
        this.tail = null;  // Tail of the list, start with no nodes (null)
    }

    // Method to insert a node at the beginning of the list
    insertAtBeginning(data) {
        let newNode = new Node(data, null, this.head);  // Create a new node with the data
        if (this.head) {
            this.head.prev = newNode;  // If there is a head node, update its 'prev' to the new node
        }
        this.head = newNode;  // Update the head of the list to the new node
        if (this.tail === null) {
            this.tail = newNode;  // If there is no tail node (list was empty), set the new node as the tail
        }
        return this.head;  // Return the new head node
    }

    // Method to display the list
    display() {
        let nodes = [];  // Create an array to hold the nodes for displaying
        let currentNode = this.head;  // Start with the head node
        while (currentNode) {
            nodes.push(currentNode.data);  // Add the current node's data to the array
            currentNode = currentNode.next;  // Move on to the next node
        }
        return nodes.join(' <-> ');  // Join the nodes' data into a string with ' <-> ' between each node and return it
    }
}

let list2 = new DoublyLinkedList();  // Create a new DoublyLinkedList instance
list2.insertAtBeginning('Red');  // Insert 'Red' at the beginning of the list
list2.insertAtBeginning('Blue');  // Insert 'Blue' at the beginning of the list, shifting 'Red' down
list2.insertAtBeginning('Green');  // Insert 'Green' at the beginning of the list, shifting 'Blue' and 'Red' down
console.log(list2.display());  // Display the list, outputs: "Green <-> Blue <-> Red"


/*

In this example:

The Node class is used to create new nodes. Each node stores some data and a link to the next node (null by default) and the previous node (null by default).
The DoublyLinkedList class creates a new doubly linked list. The list starts with a "head" and a "tail" of null because it's initially empty.
The insertAtBeginning method inserts a new node at the start of the list. 
It creates a new node, sets its next link to the current head (because it's going to be the new head), 
and then updates the previous head's prev link to the new node, then updates the list's head to the new node. 
If there is no tail yet (the list was empty), it sets the new node as the tail.
The display method prints out the list's elements. 
It starts at the head and follows the next links until it reaches the end of the list (i.e., a node with a next link of null).

*/