/*
A Greedy algorithm follows the problem-solving heuristic of making the locally optimal choice at each stage with the hope of finding a global optimum. 
In other words, the algorithm makes the optimal choice at each step as it attempts to find the overall optimal way to solve the entire problem. 

A typical example of a greedy algorithm is the algorithm for finding the shortest path between two nodes in a graph, 
such as Dijkstra's algorithm. However, a more simple example is the problem of coin change, 
where the goal is to reduce the amount of change to give to a customer in a store.

**Coin Change Problem**

The goal is to give a customer specific change using the fewest coins. Let's assume that we have coins of values 25, 10, 5, and 1. 

Here is the JavaScript code:
*/

function coinChange(amount) {
    // Define the coins we have available
    let coins = [25, 10, 5, 1];
    
    // This array will store the result: the minimum number of coins of each type
    let result = [0, 0, 0, 0];
    
    for (let i = 0; i < coins.length; i++) {
        // Find out how many coins of the current type we can use without exceeding the amount
        result[i] = Math.floor(amount / coins[i]);
        
        // Reduce the amount by the value of the coins we just used
        amount %= coins[i];
    }
    
    return result;
}

console.log(coinChange(87));  // Outputs: [3, 1, 0, 2]

/*
The output `[3, 1, 0, 2]` means that to give 87 cents to a customer, we can use 3 quarters (25 cents), 1 dime (10 cents), 0 nickels (5 cents), and 2 pennies (1 cent).

This algorithm runs in O(n) time, where n is the number of different coin denominations. 
This is because we go through the array of coin denominations once, performing a constant amount of work for each denomination.

Note that this algorithm doesn't always produce the optimal solution when the denomination of coins is not standard. 
For example, if the denominations were 1, 3, and 4, then to make 6, the greedy algorithm would choose three coins (4,1,1) whereas the optimal solution is two coins (3,3).
*/