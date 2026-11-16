const MOVES = [
    [1,2],[2,1],[2,-1], [1, -2],[-1, -2], [-2, -1], [-2, 1], [-1, 2],
];

function isOnBoard([x,y]) {
    return x >= 0 && x<= 7 && y >=0 && y <=7;
}

function getMoves ([x,y]) {
    return MOVES
       .map(([dx,dy]) => [x+dx, y+dy])
       .filter(isOnBoard);
}

