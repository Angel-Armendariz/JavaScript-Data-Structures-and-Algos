/*

An AVL Tree (Adelson-Velsky and Landis tree) is a self-balancing Binary Search Tree (BST) 
where the difference between heights of left and right subtrees cannot be more than one for all nodes.

*/

//Here is a simple example of how you can create a Node class for an AVL Tree:

class Node {
    constructor(data) {
        this.data = data; // node's data
        this.height = 1;  // height of the node
        this.left = null;  // left child node
        this.right = null;  // right child node
    }
}

//Now we'll create the AVLTree class:

class AVLTree {
    constructor() {
        this.root = null;
    }

    // Helper method to get the height of a node
    height(node) {
        if (node === null) {
            return 0;
        }
        return node.height;
    }

    // Helper method to get the balance factor of a node
    balanceFactor(node) {
        if (node === null) {
            return 0;
        }
        return this.height(node.left) - this.height(node.right);
    }

    // Helper method to perform a right rotation on a subtree
    rotateRight(y) {
        let x = y.left;
        let T2 = x.right;
        x.right = y;
        y.left = T2;
        y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
        x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
        return x;
    }

    // Helper method to perform a left rotation on a subtree
    rotateLeft(x) {
        let y = x.right;
        let T2 = y.left;
        y.left = x;
        x.right = T2;
        x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
        y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
        return y;
    }

    // Insert method to add a new node to the tree
    insert(node, data) {
        /* Normal Binary Search Tree (BST) insertion */
        if (node === null) {
            return new Node(data);
        }
        if (data < node.data) {
            node.left = this.insert(node.left, data);
        } else if (data > node.data) {
            node.right = this.insert(node.right, data);
        } else { // Equal datas are not allowed in BST
            return node;
        }

        /* Updating the height of the ancestor node */
        node.height = 1 + Math.max(this.height(node.left), this.height(node.right));

        /* Get the balance factor */
        let balance = this.balanceFactor(node);

        /* If the node is unbalanced, then fix it */
        // Left Left Case
        if (balance > 1 && data < node.left.data) {
            return this.rotateRight(node);
        }

        // Right Right Case
        if (balance < -1 && data > node.right.data) {
            return this.rotateLeft(node);
        }

        // Left Right Case
        if (balance > 1 && data > node.left.data) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }

        // Right Left Case
        if (balance < -1 && data < node.right.data) {
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }

        /* Return the (unchanged) node pointer */
        return node;
    }
}

let tree = new AVLTree();

tree.root = tree.insert(tree.root, 10);
tree.root = tree.insert(tree.root, 20);
tree.root = tree.insert(tree.root, 30);
tree.root = tree.insert(tree.root, 40);
tree.root = tree.insert(tree.root, 50);
tree.root = tree.insert(tree.root, 25);

/*

A full AVL Tree implementation that also includes delete operations and various tree traversal methods would be quite large and complex. 
The provided code should give a basic understanding of how the insertion operation in AVL trees is performed.

*/