// Find the smallest integer in the array

import { assert } from 'chai';

export function findSmallestInt (args: number[]): number {
  return Math.min(...args);
}

describe('Smallest Integer Tests', function () {
  it('Fixed Tests', function () {
    assert.strictEqual(findSmallestInt([78, 56, 232, 12, 8]), 8, 'Should return the smallest int 8');
    assert.strictEqual(findSmallestInt([78, 56, 232, 12, 18]), 12, 'Should return the smallest int 12');
    assert.strictEqual(findSmallestInt([78, 56, 232, 412, 228]), 56, 'Should return the smallest int 56');
    assert.strictEqual(findSmallestInt([78, 56, 232, 12, 0]), 0, 'Should return the smallest int 0');
    assert.strictEqual(findSmallestInt([1, 56, 232, 12, 8]), 1, 'Should return the smallest int 1');
  });
});
