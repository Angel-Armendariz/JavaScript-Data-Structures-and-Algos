/*
Backtracking is a general algorithm for finding all (or some) solutions to computational problems, particularly constraint satisfaction problems. 
It incrementally builds candidates for the solutions, and abandons a candidate as soon as it determines that the candidate cannot possibly be extended to a valid solution.

A classic example of a problem where backtracking can be used is the N-Queens puzzle.

**N-Queens Puzzle**

The N-Queens puzzle is the problem of placing N chess queens on an N×N chessboard so that no two queens threaten each other. 
Thus, a solution requires that no two queens share the same row, column, or diagonal.
*/

function solveNQueens(n) {
    let board = Array(n).fill().map(() => Array(n).fill(0));

    let solutions = [];
    placeQueens(board, 0, solutions);
    return solutions;
}

function placeQueens(board, row, solutions) {
    let n = board.length;

    if (row === n) {
        let solution = board.map(r => r.join(''));
        solutions.push(solution);
        return;
    }

    for (let col = 0; col < n; col++) {
        if (isValid(board, row, col)) {
            board[row][col] = 'Q';
            placeQueens(board, row + 1, solutions);
            board[row][col] = '.'; // backtrack
        }
    }
}

function isValid(board, row, col) {
    for (let i = 0; i < row; i++) {
        if (board[i][col] === 'Q') {
            return false;
        }
    }

    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 'Q') {
            return false;
        }
    }

    for (let i = row - 1, j = col + 1; i >= 0 && j < board.length; i--, j++) {
        if (board[i][j] === 'Q') {
            return false;
        }
    }

    return true;
}

console.log(solveNQueens(4));

/*
In the code above, `solveNQueens(n)` is the main function that calls the helper function `placeQueens(board, row, solutions)`. 
The `placeQueens` function places queens on the board row by row, and for each row, it checks all columns to see if it's valid to place a queen there. 
If it's valid, it places a queen there (`board[row][col] = 'Q'`) and moves on to the next row by recursively calling `placeQueens(board, row + 1, solutions)`. 
If it finds a solution, it adds it to the solutions list. If not, it backtracks by removing the queen from the current spot (`board[row][col] = '.'`), 
and continues checking the next column.

The `isValid(board, row, col)` function checks if a queen can be placed at the given row and column.

The time complexity for this algorithm is O(N!), as there are N possibilities to put the first queen, 
not more than N (N - 2 to be exact) to put the second queen, not more than N - 4 for the third one etc. 
Hence, the upper bound is not more than N*(N-2)*(N-4)*...*1, which is O(N!).
*/