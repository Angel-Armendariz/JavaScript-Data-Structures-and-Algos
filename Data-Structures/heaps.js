/*

Heaps are a type of binary tree-based data structure that satisfy the heap property. 
This property specifies a relationship between parent nodes and their children: 
for a max heap, each parent node is always greater than or equal to its child nodes, 
and for a min heap, each parent node is less than or equal to its child nodes.

Heaps are commonly used in the implementation of priority queues and in sorting algorithms like heapsort. 

*/

//A simple example of a binary heap in JavaScript:

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // get index of parent node
    getParent(i) {
        return Math.floor((i - 1) / 2);
    }

    // get index of left child
    getLeft(i) {
        return 2 * i + 1;
    }

    // get index of right child
    getRight(i) {
        return 2 * i + 2;
    }

    // swaps two nodes of the heap
    swap(i, j) {
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }

    // ensure the heap is correctly sorted
    heapify(i) {
        let largest = i;
        let left = this.getLeft(i);
        let right = this.getRight(i);

        if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
            largest = left;
        }

        if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
            largest = right;
        }

        if (largest !== i) {
            this.swap(i, largest);
            this.heapify(largest);
        }
    }

    // insert new value into the heap
    insert(key) {
        this.heap.push(key);

        let i = this.heap.length - 1;

        // Adjust (bubble up)
        while (i !== 0 && this.heap[this.getParent(i)] < this.heap[i]) {
            this.swap(i, this.getParent(i));
            i = this.getParent(i);
        }
    }

    // extract the maximum value
    extractMax() {
        if (this.heap.length === 0) {
            return "Heap is empty";
        }

        let root = this.heap[0];

        // Replace the root of the heap with the last element on the heap
        if (this.heap.length > 1) {
            this.heap[0] = this.heap[this.heap.length - 1];
            // heapify the root node down
            this.heapify(0);
        }

        // remove the last element from the heap
        this.heap.pop();

        // return the max value
        return root;
    }
}

let maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(15);
console.log(maxHeap.extractMax()); // Outputs: 20

/*

In this example, we're using a binary heap, specifically a max heap, 
which is a complete binary tree where the parent node is always greater than its child nodes. 
The binary heap maintains this property by performing a heapify operation when nodes are added or removed, 
ensuring that the highest (or lowest, in the case of a min heap) element is always at the root of the tree. 
This makes heaps useful for algorithms that frequently need to find and remove the highest or lowest element, such as heapsort or priority queues.

*/

/*

A Fibonacci Heap is an advanced and complicated data structure that is primarily used for priority queue operations. 
It provides better theoretical time complexity for many operations than other types of heap data structures. 
However, Fibonacci heaps are quite complex.

Also, the overhead of maintaining the structure of a Fibonacci heap is such that they are not used as commonly as binary heaps or binomial heaps for most applications. 
While they provide better asymptotic time complexity for some operations, 
the constants involved and the overhead of the complex manipulations required can make them less efficient in practice for most datasets.

Here's an overview of how Fibonacci heaps work:

A Fibonacci Heap is a collection of min-heap-ordered trees. It has a pointer to the smallest element (min pointer), and all the trees in the Fibonacci heap are of order log(n).

The primary operations of a Fibonacci heap are as follows:

1. Insert: This operation inserts a new element into the heap, which is accomplished by creating a new tree of rank 0 and adding it to the root list.

2. Find Minimum: This operation simply returns the node pointed to by the min pointer.

3. Union: This operation merges two Fibonacci heaps into a single heap by concatenating the root lists. The min pointer is then updated to point to the smallest key.

4. Extract Minimum: This operation removes the smallest key from the heap. 
This involves removing the node, merging its children with the root list, 
and then performing a "consolidate" operation which merges trees of equal rank as necessary to ensure that the remaining trees all have distinct rank.

5. Decrease Key: This operation decreases the value of a key. 
If the decreased key value violates the min heap property, then a "cut" operation is performed to remove the violated node and add it to the root list. 

6. Delete: This operation deletes a node from the heap. It uses the decrease key operation to decrease the key to negative infinity and then calls extract min to remove it.

The Fibonacci Heap is named after the Fibonacci numbers, which are used in the running time analysis.

*/