// Dice Rotation

import { assert } from 'chai';

export function rotations (dieArray: number[]): number {
  const dieOpposite = {
    1: 6,
    2: 5,
    3: 4,
    4: 3,
    5: 2,
    6: 1
  };
  const target = dieArray.filter(a => !dieArray.includes(dieOpposite[a as keyof typeof dieOpposite]));
  const targetSelect = target.length === 0 || target.length === dieArray.length ? mode(dieArray) : target[0];
  const dieArrayAdj: number[] = dieArray.map(a => {
    if (dieOpposite[a as keyof typeof dieOpposite] === targetSelect) {
      return 2;
    } else if (a === targetSelect) {
      return 0;
    } else {
      return 1;
    }
  });
  console.log(target, targetSelect, dieArray, dieArrayAdj);
  return dieArrayAdj.reduce((acc, a) => acc + a, 0);
}

const mode = (arr: number[]) => {
  return arr.sort((a, b) => arr.filter(v => v === a).length - arr.filter(v => v === b).length
  ).pop();
};

// Test:
const act = (expected: number, dieArray: number[]): void => {
  it(`dice: [${dieArray}] expected: ${expected}`, function () {
    const actual: number = rotations(dieArray);
    assert.equal(expected, actual);
  });
};

describe('Solution', function () {
  describe('Fixed Tests', function () {
    // act(2, [1, 1, 6]);
    // act(2, [1, 2, 3]);
    // act(0, [3, 3, 3]);
    // act(3, [1, 6, 2, 3]);
    act(3, [5, 4, 6, 6, 4]);
  });
});
