/*


A Binary Tree is a type of tree data structure in which each node has at most two children, 
which are referred to as the left child and the right child. 
This is what distinguishes binary trees from other types of trees where nodes can have any number of children.

*/

//Here is a simple implementation of a binary tree in JavaScript:

class Node {
    constructor(data) {
        this.data = data;       // node data
        this.left = null;       // left node child reference
        this.right = null;      // right node child reference
    }
}

class BinaryTree {
    constructor() {
        this.root = null;       // root of the binary tree
    }

    insert(data) {
        // Creating a node and initializing 
        // with data  
        let newNode = new Node(data);
        
        // If root is null then node will
        // be added to the tree and made root.
        if (this.root === null)
            this.root = newNode;
        else
            // find the correct position in the 
            // tree and add the node
            this.insertNode(this.root, newNode);
    }

    // Method to insert a node in a tree
    // it moves over the tree to find the location
    // to insert a node with a certain data  
    insertNode(node, newNode) {
        // If the data is less than the node
        // data move left of the tree 
        if (newNode.data < node.data) {
            // If left is null insert node here
            if (node.left === null)
                node.left = newNode;
            else
                // If left is not null recurr until 
                // null is found
                this.insertNode(node.left, newNode); 
        } else {
            // If the data is more than the node
            // data move right of the tree 
            if (node.right === null)
                node.right = newNode;
            else
                // If right is not null recurr until 
                // null is found
                this.insertNode(node.right, newNode);
        }
    }

    // other methods like search, remove, etc., can go here
}

let BT = new BinaryTree();
BT.insert(15);
BT.insert(25);
BT.insert(10);
BT.insert(7);
BT.insert(22);
BT.insert(17);
BT.insert(13);
BT.insert(5);
BT.insert(9);

/*

In this code, we first define a Node class that represents each node in the tree. 
Each node contains some data and references to its left and right children. 
The BinaryTree class represents the entire binary tree, starting from the root. 
The insert method is used to add a new node with specific data to the tree, 
and the insertNode method is used to compare the new node data with the current node data and decide whether to go left or right.

*/