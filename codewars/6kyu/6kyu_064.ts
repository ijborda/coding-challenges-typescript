// Maze Runner

import { assert } from 'chai';

export function mazeRunner (maze:number[][], directions:string[]): string {
  // Constants
  enum Result {
    DEAD = 'Dead',
    LOST = 'Lost',
    FINISH = 'Finish'
  }

  // Find initial position
  const pos = [-1, -1];
  maze.forEach((row, i) => {
    if (row.includes(2)) {
      pos[0] = i;
      pos[1] = row.findIndex(item => item === 2);
    }
  });

  // Follow movements
  for (let i = 0; i < directions.length; i++) {
    const dir = directions[i];
    switch (dir) {
      case 'N': pos[0] -= 1; break;
      case 'E': pos[1] += 1; break;
      case 'S': pos[0] += 1; break;
      case 'W': pos[1] -= 1; break;
    }
    const isWithinMaze = (pos[0] <= maze.length - 1 && pos[0] >= 0) && (pos[1] <= maze.length - 1 && pos[1] >= 0);
    if (!isWithinMaze) {
      return Result.DEAD;
    }
    const val = maze[pos[0]][pos[1]];
    if (val === 3) {
      return Result.FINISH;
    } else if (val === 1) {
      return Result.DEAD;
    }
  }

  return Result.LOST;
}

// Test
const maze = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 3],
  [1, 0, 1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 2, 1, 0, 1, 0, 1]
];

describe('Sample Tests', function () {
  it('Should pass sample tests', function () {
    assert.equal(mazeRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'E', 'E', 'E']), 'Finish', 'Expected Finish');
    assert.equal(mazeRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'S', 'S', 'E', 'E', 'N', 'N', 'E']), 'Finish', 'Expected Finish');
    assert.equal(mazeRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'E', 'E', 'E', 'W', 'W']), 'Finish', 'Expected Finish');

    assert.equal(mazeRunner(maze, ['N', 'N', 'N', 'W', 'W']), 'Dead', 'Expected Dead');
    assert.equal(mazeRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'S', 'S', 'S', 'S', 'S', 'S']), 'Dead', 'Expected Dead');

    assert.equal(mazeRunner(maze, ['N', 'E', 'E', 'E', 'E']), 'Lost', 'Expected Lost');
  });
});
