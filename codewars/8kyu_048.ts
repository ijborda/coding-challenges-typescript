// Sum of differences in array

import { assert } from 'chai';

export function sumOfDifferences (arr: number[]): number {
  return arr.sort((a, b) => b - a).reduce((sumOfDiff, a, i, arr) => {
    if (i !== 0) {
      sumOfDiff += arr[i - 1] - a;
    }
    return sumOfDiff;
  }, 0);
}

// Test
describe('sumOfDifferences([1, 2, 10])', function () {
  it('', function () {
    assert.equal(sumOfDifferences([1, 2, 10]), 9);
  });
});
describe('sumOfDifferences([-3, -2, -1])', function () {
  it('', function () {
    assert.equal(sumOfDifferences([-3, -2, -1]), 2);
  });
});
describe('sumOfDifferences([1])', function () {
  it('', function () {
    assert.equal(sumOfDifferences([1]), 0);
  });
});
describe('sumOfDifferences([])', function () {
  it('', function () {
    assert.equal(sumOfDifferences([]), 0);
  });
});
