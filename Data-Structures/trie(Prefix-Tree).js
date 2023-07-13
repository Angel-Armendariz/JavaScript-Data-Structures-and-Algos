/*


A Trie, sometimes also known as a Prefix Tree, is a special type of tree used to store associative data structures. 
Storing strings in a trie allows for efficient prefix queries. 
Each node of the Trie consists of multiple branches each representing a possible character of keys. 
The root of the Trie is represented by an empty character ('').

Here is a simple implementation of a Trie for storing and searching strings in JavaScript:

*/

class TrieNode {
    constructor() {
      this.children = {}; // To store the children TrieNodes for each possible character
      this.endOfWord = false; // Flag to mark the end of a word in the Trie
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    // Insert a word into the Trie
    insert(word) {
      let currentNode = this.root;
      for (let i = 0; i < word.length; i++) {
        let char = word[i];
        let node = currentNode.children[char];
        if (node == null) {
          node = new TrieNode();
          currentNode.children[char] = node;
        }
        currentNode = node;
      }
      // Mark the current nodes endOfWord as true
      currentNode.endOfWord = true;
    }
  
    // Search for a word in the Trie
    search(word) {
      let currentNode = this.root;
      for (let i = 0; i < word.length; i++) {
        let node = currentNode.children[word[i]];
        if (node == null) {
          return false; // Word not found
        }
        currentNode = node;
      }
      return currentNode.endOfWord;
    }
  }
  
  let trie = new Trie();
  trie.insert('hello');
  trie.insert('world');
  console.log(trie.search('world'));  // returns true
  console.log(trie.search('word'));  // returns false

/*

In this code, a Trie class is implemented which contains a TrieNode as its root. 
Each TrieNode has a JavaScript object, children, for storing character-node key-value pairs, and a boolean, endOfWord, to signify the end of a word.

The insert method iterates over each character in the given word, checks if it is in the current node's children, and if not, adds it. 
Then it moves the current node pointer to the new node. After inserting all characters, it marks endOfWord as true.

The search method works similarly, traversing the trie according to the given word. 
If it can traverse the trie for each character in the word and ends on a node where endOfWord is true, it returns true. 
Otherwise, it returns false, signifying that the word is not present in the trie.

*/

