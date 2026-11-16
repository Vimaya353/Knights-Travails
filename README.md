# Knights Travails

A function that finds the shortest path for a chess knight to get from one square to another on an 8x8 board.

## How it works

The board is treated as a graph: each square is a node, and each legal knight move is an edge. The program uses Breadth-First Search (BFS) with a queue and a visited set to find the shortest path.

## How to run

You need Node.js installed.

```bash
node test.js
```

## Example

```js
knightMoves([3, 3], [4, 3]);
```

Output:

```
You made it in 3 moves! Here's your path:
  [3,3]
  [4,5]
  [2,4]
  [4,3]
```

(Your path may differ slightly. Several shortest paths can exist.)