// Dice Rotation

import { assert } from 'chai';

export function rotations (dieArray: number[]): number {
  let minRotations = Number.MAX_VALUE;

  for (let target = 1; target <= 6; target++) {
    const rotations: number[] = dieArray.map(die => {
      const opposite = Math.abs(7 - die);
      switch (target) {
        case opposite: return 2;
        case die: return 0;
        default: return 1;
      }
    });
    const totalRotations = rotations.reduce((acc, a) => acc + a, 0);
    minRotations = Math.min(totalRotations, minRotations);
  }

  return minRotations;
}

// Test:
const act = (expected: number, dieArray: number[]): void => {
  it(`dice: [${dieArray}] expected: ${expected}`, function () {
    const actual: number = rotations(dieArray);
    assert.equal(expected, actual);
  });
};

describe('Solution', function () {
  describe('Fixed Tests', function () {
    act(2, [1, 1, 6]);
    act(2, [1, 2, 3]);
    act(0, [3, 3, 3]);
    act(3, [1, 6, 2, 3]);
    act(3, [5, 4, 6, 6, 4]);
    act(3, [6, 2, 4, 4, 5]);
    act(4, [6, 6, 6, 5, 1, 3]);
    act(3, [5, 5, 4, 4, 3]);
  });
});
