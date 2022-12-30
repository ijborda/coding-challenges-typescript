// Simple beads count

import { assert } from 'chai';

export function countRedBeads (n: number): number {
  return Math.max(0, 2 * (n - 1));
}

describe('Test Cases', function () {
  it('Should work for Sample Test Cases', function () {
    assert.equal(countRedBeads(0), 0);
    assert.equal(countRedBeads(1), 0);
    assert.equal(countRedBeads(3), 4);
    assert.equal(countRedBeads(5), 8);
  });
});
