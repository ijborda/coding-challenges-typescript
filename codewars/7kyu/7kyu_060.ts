// Minimize Sum Of Array (Array Series #1)

import { assert } from 'chai';

export function minSum (arr: number[]): number {
  const half = arr.length / 2;
  return arr.sort((a, b) => a - b).reduce((acc, a, i, arr) => {
    if (i < half) {
      return acc;
    }
    const product = a * arr[arr.length - i - 1];
    return acc + product;
  }, 0);
}

describe('Basic Tests', function () {
  it('Testing for [5, 4, 2, 3]', () => assert.strictEqual(minSum([5, 4, 2, 3]), 22));
  it('Testing for [12, 6, 10, 26, 3, 24]', () => assert.strictEqual(minSum([12, 6, 10, 26, 3, 24]), 342));
  it('Testing for [9, 2, 8, 7, 5, 4, 0, 6]', () => assert.strictEqual(minSum([9, 2, 8, 7, 5, 4, 0, 6]), 74));
});
