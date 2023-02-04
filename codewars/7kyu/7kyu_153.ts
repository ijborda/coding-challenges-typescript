// Cartesian neighbors

import { assert } from 'chai';
import * as chai from 'chai';

export function cartesianNeighbor (x: number, y: number): number[][] {
  const neighbors: number[][] = [];

  for (let a = x - 1; a <= x + 1; a++) {
    for (let b = y - 1; b <= y + 1; b++) {
      if (a !== x || b !== y) {
        neighbors.push([a, b]);
      }
    }
  }

  return neighbors;
}

function sortedList (list: number[][]) {
  return list.sort((a, b) => a[1] - b[1]).sort((a, b) => a[0] - b[0]);
}

chai.config.truncateThreshold = 0;

describe('Tests', function () {
  it('Example Test', function () {
    assert.deepEqual(
      sortedList(cartesianNeighbor(2, 2)),
      [[1, 1], [1, 2], [1, 3], [2, 1], [2, 3], [3, 1], [3, 2], [3, 3]]
    );
  });
});
