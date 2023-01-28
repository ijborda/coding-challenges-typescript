// Beginner - Lost Without a Map

import { assert } from 'chai';

export function maps (x: number[]): number[] {
  return x.map(a => a * 2);
}

// Test
describe('Beginner - Lost Without a Map', () => {
  it('Fixed tests', () => {
    assert.deepEqual(maps([1, 2, 3]), [2, 4, 6]);
    assert.deepEqual(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]);
    assert.deepEqual(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]);
  });
});
