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


window.findSolutions = function(row, cols, newBoard, validator, callback){
  if (row === cols) {
    console.log("returned!");
    return callback();
  }

  for (var i = 0; i < cols; i++) {
    newBoard.togglePiece(row, i);
        console.log(newBoard);

    if (!newBoard[validator]()) {
      window.findSolutions(row + 1, cols, newBoard, validator, callback);
    }
    newBoard.togglePiece(row, i);
  }

};

window.findNRooksSolution = function(n) {
  var solution;
  var newBoard = new Board({n:3});
  console.log(newBoard)
  solution = window.findSolutions(0, n, newBoard, "hasAnyRooksConflicts", function() {
    // console.log(newBoard.rows());
    return newBoard.rows();
  });

  // console.log(solution);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
// window.countNRooksSolutions = function(n) {

//   var newBoard = new Board({n:n});
//   var solutionCount = 0;

//   window.findSolutions(0, n, newBoard, "hasAnyRooksConflicts", function(){
//      solutionCount++;
//   });

//   console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
//   return solutionCount;
// };



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
// window.findNQueensSolution = function(n) {
//   var solution = undefined; //fixme

//   console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
//   return solution;
// };


// // return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
// window.countNQueensSolutions = function(n) {
//   var solutionCount = undefined; //fixme

//   console.log('Number of solutions for ' + n + ' queens:', solutionCount);
//   return solutionCount;
// };
