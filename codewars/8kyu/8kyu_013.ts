// Difference of Volumes of Cuboids

import { assert } from 'chai';

function findDifference (a: [number, number, number], b: [number, number, number]): number {
  return Math.abs(calcVolume(a) - calcVolume(b));
}

function calcVolume (a: [number, number, number]): number {
  return a.reduce((acc, a) => acc * a, 1);
}

// Test
describe('Tests', () => {
  it('Basic tests', () => {
    assert.strictEqual(findDifference([3, 2, 5], [1, 4, 4]), 14);
    assert.strictEqual(findDifference([9, 7, 2], [5, 2, 2]), 106);
    assert.strictEqual(findDifference([11, 2, 5], [1, 10, 8]), 30);
    assert.strictEqual(findDifference([4, 4, 7], [3, 9, 3]), 31);
    assert.strictEqual(findDifference([15, 20, 25], [10, 30, 25]), 0);
  });
});
