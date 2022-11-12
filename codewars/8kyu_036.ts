// Gravity Flip

import { assert } from 'chai';

export function flip (dir: string, arr: number[]): number[] {
  return arr.sort((a, b) => dir === 'R' ? a - b : b - a);
}

// Test
describe('Gravity Flip', () => {
  it('Sample tests', () => {
    assert.deepEqual(flip('R', [3, 2, 1, 2]), [1, 2, 2, 3]);
    assert.deepEqual(flip('L', [1, 4, 5, 3, 5]), [5, 5, 4, 3, 1]);
  });
});
