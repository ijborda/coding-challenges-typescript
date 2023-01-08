// Maximum Triplet Sum (Array Series #7)

import { assert } from 'chai';

export function maxTriSum (nums: number[]): number {
  return Array.from(new Set(nums)).sort((a, b) => a - b).slice(-3).reduce((a, b) => a + b, 0);
}

describe('Basic tests', () => {
  it('Testing for [3, 2, 6, 8, 2, 3]', () => assert.strictEqual(maxTriSum([3, 2, 6, 8, 2, 3]), 17));
  it('Testing for [2, 9, 13, 10, 5, 2, 9, 5]', () => assert.strictEqual(maxTriSum([2, 9, 13, 10, 5, 2, 9, 5]), 32));
  it('Testing for [2, 1, 8, 0, 6, 4, 8, 6, 2, 4]', () => assert.strictEqual(maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4]), 18));
  it('Testing for [-3, -27, -4, -2, -27, -2]', () => assert.strictEqual(maxTriSum([-3, -27, -4, -2, -27, -2]), -9));
  it('Testing for [-14, -12, -7, -42, -809, -14, -12]', () =>
    assert.strictEqual(maxTriSum([-14, -12, -7, -42, -809, -14, -12]), -33));
  it('Testing for [-13, -50, 57, 13, 67, -13, 57, 108, 67]', () =>
    assert.strictEqual(maxTriSum([-13, -50, 57, 13, 67, -13, 57, 108, 67]), 232));
  it('Testing for [-7, 12, -7, 29, -5, 0, -7, 0, 0, 29]', () =>
    assert.strictEqual(maxTriSum([-7, 12, -7, 29, -5, 0, -7, 0, 0, 29]), 41));
  it('Testing for [-2, 0, 2]', () => assert.strictEqual(maxTriSum([-2, 0, 2]), 0));
  it('Testing for [-2, -4, 0, -9, 2]', () => assert.strictEqual(maxTriSum([-2, -4, 0, -9, 2]), 0));
  it('Testing for [-5, -1, -9, 0, 2]', () => assert.strictEqual(maxTriSum([-5, -1, -9, 0, 2]), 1));
});
