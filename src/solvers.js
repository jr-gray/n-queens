/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = new Board({'n': n});
  
  var recurse = function(row) {
    if (row === n) {
      return solution.rows();
    }

    for (var i = 0; i < n; i++) {
      solution.togglePiece(row, i);
      if (!solution.hasAnyRooksConflicts()) {
        row ++;
        return recurse(row);
      } else {
        solution.togglePiece(row, i);
      }
    }
  };

  return recurse(0);
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solution = new Board({'n':n});
  var count = 0;

  var recurse = function(row) {
    // base case
    if (row === n) {
      count++;
      return;
    }

    for (var i = 0; i < n; i++) {
      solution.togglePiece(row, i);
      if(!solution.hasAnyRooksConflicts()) {
        recurse(row+1);
      }
      solution.togglePiece(row, i);
    }
  };

  recurse(0);
  return count;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

  var solution = new Board({'n': n});
  
  var recurse = function(row) {
    if (row === n) {
      return solution.rows();
    }

    for (var i = 0; i < n; i++) {
      solution.togglePiece(row, i);
      if (!solution.hasAnyQueensConflicts()) {
        row ++;
        return recurse(row);
      } else {
        solution.togglePiece(row, i);
      }
    }
  };

  return recurse(0);
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = new Board({'n': n});
  var count = 0;

  var recurse = function(row) {
    // base case
    if (row === n) {
      count++;
      return;
    }

    for (var i = 0; i < n; i++) {
      solution.togglePiece(row, i);
      if (!solution.hasAnyQueensConflicts()) {
        recurse(row + 1);
      }
      solution.togglePiece(row, i);
    }
  };

  recurse(0);
  return count;
};
