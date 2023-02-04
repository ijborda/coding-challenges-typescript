// Possibilities Array

import { assert } from 'chai';

export function isAllPossibilities (x: number[]): boolean {
  if (!x.length) {
    return false;
  }
  return x.sort((a, b) => a - b).every((a, i) => a === i);
}

// Test
describe('Possiblities Array', function () {
  it('simple test', function () {
    assert.strictEqual(isAllPossibilities([0, 2, 19, 4, 4]), false);
    assert.strictEqual(isAllPossibilities([3, 2, 1, 0]), true);
    assert.strictEqual(isAllPossibilities([0, 1, 2, 3]), true);
    assert.strictEqual(isAllPossibilities([1, 2, 3, 4]), false);
    assert.strictEqual(isAllPossibilities([0, 2, 3]), false);
    assert.strictEqual(isAllPossibilities([0]), true);
    assert.strictEqual(isAllPossibilities([]), false);
    assert.strictEqual(isAllPossibilities([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), true);
    assert.strictEqual(isAllPossibilities([0, 1, 3, -2, 5, 4]), false);
    assert.strictEqual(isAllPossibilities([1, -1, 2, -2, 3, -3, 6]), false);
  });
});
