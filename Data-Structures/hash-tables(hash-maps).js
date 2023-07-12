/*

A Hash Table (also known as a Hash Map) is a type of data structure that implements an associative array abstract data type, 
a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of buckets or slots,
from which the desired value can be found.

In JavaScript, you can use an object to implement a Hash Map.

*/

//Here's a basic example:

class HashTable {
    constructor() {
        this.table = {};  // Initialize an empty object to hold the key-value pairs
    }

    // put function
    put(key, value) {   
        // Adding key-value pair to the hash table
        this.table[key] = value;  
    }  

    // get function 
    get(key) {
        // Check if the key exists in the hash table
        if(this.table.hasOwnProperty(key)) 
            return this.table[key];  // If the key exists, return its value
        return null;  // If the key doesn't exist, return null
    }  

    // remove function
    remove(key) { 
        // Check if the key exists in the hash table
        if(this.table.hasOwnProperty(key)) {
            delete this.table[key];  // If the key exists, remove the key-value pair
            return true;  // Return true to indicate successful removal
        }
        return false;  // If the key doesn't exist, return false
    }  
}

let hashTable = new HashTable();  // Create a new HashTable

hashTable.put("color1", "Red");  // Add a key-value pair to the hash table
hashTable.put("color2", "Blue");  // Add another key-value pair to the hash table
console.log(hashTable.get("color1"));  // Outputs: 'Red'
console.log(hashTable.remove("color2"));  // Outputs: true
console.log(hashTable.get("color2"));  // Outputs: null

/*

In this code, a HashTable class is defined with methods for adding (put) key-value pairs, 
retrieving (get) the value associated with a given key, and removing (remove) the key-value pair associated with a given key. 
It uses a JavaScript object to store the key-value pairs, 
taking advantage of the object's properties as keys and their values as the corresponding values in the hash table. 
The put operation uses the assignment operator to add a key-value pair, 
the get operation uses the property access notation to retrieve the value for a given key, 
and the remove operation uses the delete keyword to remove a key-value pair.

*/