/*

Sets: The Set object in JavaScript lets you store unique values of any type, whether primitive values or object references. 
It is similar to an array but unlike arrays, sets don't allow duplicate values. Here's an example:

*/

let mySet = new Set(); // Initialize a new Set

// Adding values to Set
mySet.add(1); // Set [ 1 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add(5); // Still Set [ 1, 5 ], because 5 is already present in the set
mySet.add('some text'); // Set [ 1, 5, 'some text' ]
let obj = {a: 1, b: 2};
mySet.add(obj); // Set [ 1, 5, 'some text', { a: 1, b: 2 } ]

// Checking the size of Set
console.log(mySet.size); // 4

// Checking if an item exists in the Set
console.log(mySet.has(1)); // true
console.log(mySet.has('some text')); // true
console.log(mySet.has(obj)); // true

// Deleting an item from the Set
mySet.delete(5); // Removes 5 from the Set
console.log(mySet); // Set [ 1, 'some text', { a: 1, b: 2 } ]


/*

Maps: The Map object in JavaScript holds key-value pairs and remembers the original insertion order of the keys. 
It can hold both objects and primitive values as either key or value. 
When iterating over it, a map object returns the key-value pairs in the order of their insertion. Here's an example:

*/

let myMap = new Map(); // Initialize a new Map

// Adding key-value pairs to Map
myMap.set('name', 'Alice'); // Map { 'name' => 'Alice' }
myMap.set(1, 'one'); // Map { 'name' => 'Alice', 1 => 'one' }
myMap.set(obj, 'object'); // Map { 'name' => 'Alice', 1 => 'one', { a: 1, b: 2 } => 'object' }

// Checking the size of Map
console.log(myMap.size); // 3

// Getting a value by key
console.log(myMap.get(1)); // 'one'
console.log(myMap.get(obj)); // 'object'

// Checking if a key exists in the Map
console.log(myMap.has('name')); // true
console.log(myMap.has(obj)); // true

// Deleting an item from the Map
myMap.delete('name'); // Removes 'name' from the Map
console.log(myMap); // Map { 1 => 'one', { a: 1, b: 2 } => 'object' }

// Iterating over Map
for (let [key, value] of myMap) {
  console.log(`Key: ${key}, Value: ${value}`);
}


/*

In the examples above, you see how to add items, check the size, check if an item exists, and delete an item in both Sets and Maps. 
Also, there's an example of iterating over a Map object. 
The order of items in a Map is the same as the insertion order, which can be very helpful in certain situations.

*/