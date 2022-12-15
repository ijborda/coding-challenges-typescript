// Beginner Series #3 Sum of Numbers

import { assert } from 'chai';

export function getSum (a: number, b: number): number {
  if (a === b) {
    return a;
  }

  const min = a < b ? a : b;
  const max = min === a ? b : a;
  const arr = Array.from({ length: max - min + 1 }, (_, i) => i + min);

  return arr.reduce((acc, a) => acc + a, 0);
}

describe('getSum', function () {
  it('Sample Tests', function () {
    assert.strictEqual(getSum(0, -1), -1);
    assert.strictEqual(getSum(0, 1), 1);
  });
});
