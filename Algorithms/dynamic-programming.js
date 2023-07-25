/*
Dynamic programming (DP) is a problem-solving technique for solving an optimization problem by breaking it down into 
simpler subproblems and utilizing the fact that the optimal solution to the overall problem depends upon the optimal solution to its subproblems. 
The idea is to solve the subproblems, store the solutions, and use these stored solutions to construct the solution to larger subproblems.

A classic DP problem is finding the nth Fibonacci number. Here's how you might solve it using dynamic programming:
*/

function fib(n) {
    // Array to store the fibonacci sequence
    let f = Array(n+1).fill(0);

    // Base cases
    f[0] = 0;
    f[1] = 1;

    // Build up the array from the bottom up
    for (let i = 2; i <= n; i++) {
        f[i] = f[i-1] + f[i-2];
    }

    return f[n];  // return nth Fibonacci number
}

console.log(fib(10));  // Outputs: 55

/*
This algorithm runs in O(n) time and uses O(n) space to store the array. 
The reason it's faster than the naive recursive solution (which has O(2^n) time complexity) is because it's not doing redundant work. 
In the naive recursive solution, many subproblems are solved multiple times, whereas in this DP solution, each subproblem is solved only once.

Another classic problem in DP is the Knapsack problem. Here's a simple 0/1 Knapsack problem solved with dynamic programming:
*/

function knapsack(values, weights, capacity) {
    // Create a matrix to hold the maximum value
    let K = Array(values.length+1).fill(0).map(() => Array(capacity+1).fill(0));

    // Iterate through each item
    for (let i = 1; i <= values.length; i++) {
        // Iterate through each capacity
        for (let w = 1; w <= capacity; w++) {
            if (weights[i-1] <= w) {
                // Find the maximum value we can get by including or excluding the item
                K[i][w] = Math.max(values[i-1] + K[i-1][w-weights[i-1]], K[i-1][w]);
            } else {
                K[i][w] = K[i-1][w];  // This item can't be included in the optimal solution
            }
        }
    }

    return K[values.length][capacity];  // return the maximum value that can be put in a knapsack of given capacity
}

let values = [60, 100, 120];
let weights = [10, 20, 30];
let capacity = 50;

console.log(knapsack(values, weights, capacity));  // Outputs: 220

/*
This algorithm runs in O(nW) time where n is the number of items and W is the capacity of the knapsack. 
This is because it uses two nested loops: one iterating over the number of items and one iterating over the possible weights. 
This is an improvement over the naive recursive solution, which has exponential time complexity. It also uses O(nW) space to store the DP table.
*/