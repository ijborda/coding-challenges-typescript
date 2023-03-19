// Find the unique number

import { assert } from 'chai';

export function findUniq (arr: number[]): number {
  const sorted = arr.sort();
  return sorted[0] === sorted[1] ? sorted[sorted.length - 1] : sorted[0];
}

// Test
describe('findUniq', () => {
  it('should handle sample cases', () => {
    assert.strictEqual(findUniq([1, 1, 1, 2, 1, 1]), 2);
    assert.strictEqual(findUniq([0, 0, 0.55, 0, 0]), 0.55);
  });
});
