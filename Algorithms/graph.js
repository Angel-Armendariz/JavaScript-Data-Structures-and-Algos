/*
Graph algorithms are a set of algorithms for traversing and searching a graph - a data structure consisting of nodes (or vertices) and edges. 
Two common graph algorithms are Depth-First Search (DFS) and Breadth-First Search (BFS).

1. Depth-First Search (DFS): DFS is a graph traversal algorithm that explores as far as possible along each branch before backtracking. 
It's often used to visit every node in a graph.
*/

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfs(neighbor);
                }
            });
        })(start);

        return result;
    }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
console.log(g.depthFirstRecursive("A")); // ["A", "B", "D", "E", "C"]

/*
Time Complexity: The time complexity of DFS is O(V + E) where V is the number of vertices and E is the number of edges, 
as each vertex and each edge will be explored once.

2. Breadth-First Search (BFS): BFS is another graph traversal algorithm that visits all the vertices of a graph in breadth-first order i.e.,
it visits vertices that are closer (in terms of the number of edges) before the vertices that are farther. 
Hence it first visits all the vertices at the same level (distance) and then goes on to the next level.
*/

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    breadthFirst(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;

        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }
}

let g2 = new Graph();
g2.addVertex("A");
g2.addVertex("B");
g2.addVertex("C");
g2.addVertex("D");
g2.addVertex("E");
g2.addEdge("A", "B");
g2.addEdge("A", "C");
g2.addEdge("B", "D");
g2.addEdge("C", "E");
g2.addEdge("D", "E");
console.log(g2.breadthFirst("A")); // ["A", "B", "C", "D", "E"]

/*
Time Complexity: The time complexity of BFS is also O(V + E) where V is the number of vertices and E is the number of edges, 
as each vertex and each edge will be explored once.
*/