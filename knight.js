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

function knightMoves(start,end) {
    if (!isOnBoard (start) || !isOnBoard(end)) {
        console.log("Both squares must be on the board (0 to 7).");
        return;
    }

    const visited = new Set([toKey(start)]);
    const queue = [{square:start,parent:null}];

    while (queue.length > 0) {
        const current = queue.shift();

        if (toKey(current.square) === toKey(end)) {
            const path = buildPath(current);
            printPath(path);
            return path;
        }

        for (const next of getMoves(current.square)) {
            if (!visited.has(toKey(next))) {
                visited.add(toKey(next));
                queue.push({squeare:next,parent:current});
            }
        }
    }
}