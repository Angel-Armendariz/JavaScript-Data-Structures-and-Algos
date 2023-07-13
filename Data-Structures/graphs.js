/*

A Graph is a non-linear data structure consisting of nodes and edges. 
The nodes are sometimes also referred to as vertices and the edges link these nodes. 
Graphs are used to solve many real-life problems. Graphs are used to represent networks. 
The networks may include paths in a city or telephone network or circuit network.

There are two types of Graphs:

Directed Graphs (DiGraph): The edges in these graphs show direction.

Undirected Graphs: The edges in these graphs do not show any direction.

Graphs can also be weighted (where each edge has a cost/weight) or unweighted.

Here is an example of an undirected, unweighted graph represented with an adjacency list in JavaScript:

*/

class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    // Adds a vertex to the graph
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
  
    // Adds an edge between two vertices in the graph
    addEdge(vertex1, vertex2) {
      if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
        throw new Error('Invalid vertex');
      }
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  
    // Removes an edge between two vertices in the graph
    removeEdge(vertex1, vertex2) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        v => v !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        v => v !== vertex1
      );
    }
  
    // Removes a vertex and all associated edges from the graph
    removeVertex(vertex) {
      while (this.adjacencyList[vertex].length) {
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacentVertex);
      }
      delete this.adjacencyList[vertex];
    }
  }
  
  const graph = new Graph();
  graph.addVertex('Tokyo');
  graph.addVertex('San Francisco');
  graph.addVertex('New York');
  graph.addEdge('Tokyo', 'San Francisco');
  graph.addEdge('Tokyo', 'New York');
  console.log(graph.adjacencyList);


/*

In this example, the Graph class has methods to add and remove vertices and edges. 
Vertices are represented as keys in the adjacencyList object, with the associated values being arrays of adjacent vertices. 
The addEdge method adds a vertex to the adjacency list of the other, creating a bidirectional, or undirected, edge. 
The removeEdge and removeVertex methods remove edges and vertices, respectively.

*/