// Waiting room

import { assert } from 'chai';

export function lastChair (n: number): number {
  return n - 1;
}

// Test
describe('lastChair', () => {
  it('should return 10 for n = 9', () => {
    assert.equal(lastChair(10), 9);
  });
});
