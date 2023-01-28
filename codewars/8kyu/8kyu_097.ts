// N-th Power

import { assert } from 'chai';

export function index (array: number[], n: number): number {
  const base = array[n];
  return base || base === 0 ? Math.pow(base, n) : -1;
}

describe('Basic tests', () => {
  it('Basic test should pass', () => {
    assert.equal(index([1, 2, 3, 4], 2), 9);
    assert.equal(index([1, 3, 10, 100], 3), 1000000);
    assert.equal(index([3, 1], 0), 1);
    assert.equal(index([1, 2], 3), -1);
    assert.equal(index([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 9), 1);
    assert.equal(index([1, 1, 1, 1, 1, 1, 1, 1, 1, 2], 9), 512);
    assert.equal(index([29, 82, 45, 10], 3), 1000);
    assert.equal(index([6, 31], 3), -1);
    assert.equal(index([75, 68, 35, 61, 9, 36, 89, 11, 30], 10), -1);
    assert.equal(index([1, 7, 0], 2), 0);
  });
});
