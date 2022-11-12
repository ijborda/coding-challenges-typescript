// Calculate average

import { assert } from 'chai';

export function findAverage (array: number[]): number {
  if (array && array.length > 0) {
    return array.reduce((sum, a) => sum + a, 0) / array.length;
  }
  return 0;
}

// Test
describe('solution', () => {
  it('should calculate avg of given numbers', () => {
    assert.strictEqual(findAverage([1, 1, 1]), 1);
  });
  it('empty array should return 0', () => {
    assert.strictEqual(findAverage([]), 0);
  });
});
