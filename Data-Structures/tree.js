/*

A tree is a widely used abstract data type (ADT) that simulates a hierarchical tree structure, with a set of linked nodes. 
This type of data structure is called a "tree" because the diagram of a tree and its children mirrors the diagram of a physical tree, with a trunk and branches.

The top node of the tree is called the root, and the links from the root down to its children form the rest of the tree. 
Nodes in a tree that are not the root and are not leaves are called internal nodes.

*/

//Here's a simple example of a general tree structure where each node can have any number of children. This is often referred to as an N-ary tree:

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        this.children = this.children.filter(node => {
            return node.data !== data;
        });
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();

            arr.push(...node.children);
            fn(node);
        }
    }

    traverseDF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();

            arr.unshift(...node.children);
            fn(node);
        }
    }
}

// Usage:
const t = new Tree();
t.root = new Node(1);
t.root.add(2);
t.root.add(3);
t.root.children[0].add(4);

t.traverseBF((node) => { console.log(node.data) });  // Outputs: 1, 2, 3, 4
t.traverseDF((node) => { console.log(node.data) });  // Outputs: 1, 2, 4, 3

/*

In this code, the Node class represents each node in the tree. 
Each node keeps track of its data and its children. 
The Tree class represents the entire tree, with the 'root' property as the top node in the tree. 
The traverseBF and traverseDF methods are used to traverse the tree in breadth-first and depth-first orders, respectively. 
In both methods, we use an array to mimic a queue (for breadth-first) or a stack (for depth-first), 
and apply a callback function fn to each node as we visit it.

*/