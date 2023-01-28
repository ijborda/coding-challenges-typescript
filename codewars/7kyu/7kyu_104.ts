// Maximum Gap (Array Series #4)

import { assert } from 'chai';

export function maxGap (nums: number[]): number {
  const arrSorted = nums.sort((a, b) => a - b);
  let maxDiff = 0;

  arrSorted.forEach((a, i, arr) => {
    if (i !== 0) {
      const diff = a - arr[i - 1];
      maxDiff = Math.max(diff, maxDiff);
    }
  });

  return maxDiff;
}

describe('Basic tests', () => {
  it('Testing for [13, 10, 2, 9, 5]', () => assert.strictEqual(maxGap([13, 10, 2, 9, 5]), 4));
  it('Testing for [13, 3, 5]', () => assert.strictEqual(maxGap([13, 3, 5]), 8));
  it('Testing for [24, 299, 131, 14, 26, 25]', () => assert.strictEqual(maxGap([24, 299, 131, 14, 26, 25]), 168));
  it('Testing for [-3, -27, -4, -2]', () => assert.strictEqual(maxGap([-3, -27, -4, -2]), 23));
  it('Testing for [-7, -42, -809, -14, -12]', () => assert.strictEqual(maxGap([-7, -42, -809, -14, -12]), 767));
  it('Testing for [12, -5, -7, 0, 290]', () => assert.strictEqual(maxGap([12, -5, -7, 0, 290]), 278));
  it('Testing for [-54, 37, 0, 64, -15, 640, 0]', () => assert.strictEqual(maxGap([-54, 37, 0, 64, -15, 640, 0]), 576));
  it('Testing for [130, 30, 50]', () => assert.strictEqual(maxGap([130, 30, 50]), 80));
  it('Testing for [1, 1, 1]', () => assert.strictEqual(maxGap([1, 1, 1]), 0));
  it('Testing for [-1, -1, -1]', () => assert.strictEqual(maxGap([-1, -1, -1]), 0));
});
