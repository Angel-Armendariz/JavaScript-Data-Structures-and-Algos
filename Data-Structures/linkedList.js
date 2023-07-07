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

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtBeginning(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    display() {
        let nodes = [];
        let currentNode = this.head;
        while (currentNode) {
            nodes.push(currentNode.data);
            currentNode = currentNode.next;
        }
        return nodes.join(' -> ');
    }
}

let list = new LinkedList();
list.insertAtBeginning('Red');
list.insertAtBeginning('Blue');
list.insertAtBeginning('Green');
console.log(list.display());  // Outputs: "Green -> Blue -> Red"

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

class Node {
    constructor(data, prev = null, next = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertAtBeginning(data) {
        let newNode = new Node(data, null, this.head);
        if (this.head) {
            this.head.prev = newNode;
        }
        this.head = newNode;
        if (this.tail === null) {
            this.tail = newNode;
        }
        return this.head;
    }

    display() {
        let nodes = [];
        let currentNode = this.head;
        while (currentNode) {
            nodes.push(currentNode.data);
            currentNode = currentNode.next;
        }
        return nodes.join(' <-> ');
    }
}

let list2 = new DoublyLinkedList();
list2.insertAtBeginning('Red');
list2.insertAtBeginning('Blue');
list2.insertAtBeginning('Green');
console.log(list2.display());  // Outputs: "Green <-> Blue <-> Red"

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