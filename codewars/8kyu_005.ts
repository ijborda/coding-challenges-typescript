// Nth Smallest Element (Array Series #4)

import { strict as assert } from 'assert';

function nthSmallest (arr: number[], pos: number) {
  return arr.sort((a, b) => a - b)[pos - 1];
}

// Test
describe('Basic tests', () => {
  it('nthSmallest([3, 1, 2], 2)', () => assert.strictEqual(nthSmallest([3, 1, 2], 2), 2));
  it('nthSmallest([15, 20, 7, 10, 4, 3], 3)', () => assert.strictEqual(nthSmallest([15, 20, 7, 10, 4, 3], 3), 7));
  it('nthSmallest([-5, -1, -6, -18], 4)', () => assert.strictEqual(nthSmallest([-5, -1, -6, -18], 4), -1));
  it('nthSmallest([-102, -16, -1, -2, -367, -9], 5)', () => assert.strictEqual(nthSmallest([-102, -16, -1, -2, -367, -9], 5), -2));
  it('nthSmallest([2, 169, 13, -5, 0, -1], 4)', () => assert.strictEqual(nthSmallest([2, 169, 13, -5, 0, -1], 4), 2));
});
