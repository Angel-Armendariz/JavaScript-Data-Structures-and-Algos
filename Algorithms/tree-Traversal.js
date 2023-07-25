/*
Tree traversal algorithms are used to visit all the nodes in a tree. 
There are multiple ways to do this depending on the order in which the nodes are visited:

1. Inorder (Left-Root-Right)
2. Preorder (Root-Left-Right)
3. Postorder (Left-Right-Root)

Here is an example using a Binary Search Tree:
*/

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        var newNode = new Node(data);

        if (this.root === null) 
            this.root = newNode;
        else 
            this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) 
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        } else {
            if (node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right, newNode);
        }
    }

    // Inorder (Left-Root-Right)
    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    // Preorder (Root-Left-Right)
    preorder(node) {
        if (node !== null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    // Postorder (Left-Right-Root)
    postorder(node) {
        if (node !== null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }
}

let BST = new BinarySearchTree();
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);

console.log("Inorder Traversal:"); // Outputs: 5, 7, 9, 10, 13, 15, 17, 22, 25
BST.inorder(BST.root);

console.log("Preorder Traversal:"); // Outputs: 15, 10, 7, 5, 9, 13, 25, 22, 17
BST.preorder(BST.root);

console.log("Postorder Traversal:"); // Outputs: 5, 9, 7, 13, 10, 17, 22, 25, 15
BST.postorder(BST.root);

/*
For each of these methods, we're visiting every node exactly once. 
The time complexity for tree traversal is O(n), where n is the number of nodes in the tree. 
This is because each node must be visited once and only once.

Note: Here we have implemented tree traversal methods in the Binary Search Tree. 
These methods are generic and can be used with any type of tree with minor tweaks.
*/