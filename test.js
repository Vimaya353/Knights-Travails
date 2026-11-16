const knightMoves = require("./knight");

knightMoves([0, 0], [1, 2]);  // 1 move
knightMoves([0, 0], [3, 3]);  // 2 moves
knightMoves([3, 3], [0, 0]);  // 2 moves
knightMoves([0, 0], [7, 7]);  // 6 moves
knightMoves([3, 3], [4, 3]);  // 3 moves
knightMoves([2, 2], [2, 2]);  // 0 moves
knightMoves([0, 0], [8, 8]);  // error message