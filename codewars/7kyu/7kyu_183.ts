// All Star Code Challenge #14 - Find the median

import { assert } from 'chai';

export function median (n: number[]):number {
  n.sort((a, b) => a - b);
  const midCeil = Math.floor(n.length / 2);
  if (n.length % 2) {
    return n[midCeil];
  } else {
    return (n[midCeil] + n[midCeil - 1]) / 2;
  }
}

// Test
describe('solution', function () {
  it('basic Tests', function () {
    assert.equal(median([1, 2, 3, 4]), 2.5);
    assert.equal(median([3, 4, 1, 2, 5]), 3);
    assert.equal(median([10, 29, 23, 94, 76, 96, 5, 85, 4, 33, 47, 41, 87]), 41);
  });
});
