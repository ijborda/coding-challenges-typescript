// Sort Numbers

import { assert } from 'chai';

export function solution (nums: number[]): number[] {
  return nums.sort((a, b) => a - b);
}

describe('Sample Test Cases', function () {
  it('Should return an array', function () {
    assert.deepEqual(solution([1, 2, 10, 50, 5]), [1, 2, 5, 10, 50]);
    assert.deepEqual(solution([]), []);
  });
});
