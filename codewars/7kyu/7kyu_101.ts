// Product Array (Array Series #5)

import { assert } from 'chai';

export function productArray (nums: number[]): number[] {
  return nums.map((_, i, arr) => {
    const arrCurrent = [...arr.slice(0, i), ...arr.slice(i + 1)];
    return arrCurrent.reduce((acc: number, a: number) => acc * a, 1);
  });
}

describe('Basic Tests', () => {
  it('Testing for [12, 20]', () => assert.deepEqual(productArray([12, 20]), [20, 12]));
  it('Testing for [3, 27, 4, 2]', () => assert.deepEqual(productArray([3, 27, 4, 2]), [216, 24, 162, 324]));
  it('Testing for [13, 10, 5, 2, 9]', () => assert.deepEqual(productArray([13, 10, 5, 2, 9]), [900, 1170, 2340, 5850, 1300]));
  it('Testing for [16, 17, 4, 3, 5, 2]', () =>
    assert.deepEqual(productArray([16, 17, 4, 3, 5, 2]), [2040, 1920, 8160, 10880, 6528, 16320]));
});
