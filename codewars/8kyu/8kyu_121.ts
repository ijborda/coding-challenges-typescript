// Sum of positive

import { assert } from 'chai';

export function positiveSum (arr:number[]):number {
  return arr.reduce((acc, a) => a > 0 ? acc + a : acc, 0);
}

describe('solution', function () {
  it('Basic Tests', function () {
    assert.equal(positiveSum([1, 2, 3, 4, 5]), 15);
    assert.equal(positiveSum([1, -2, 3, 4, 5]), 13);
    assert.equal(positiveSum([]), 0);
    assert.equal(positiveSum([-1, -2, -3, -4, -5]), 0);
    assert.equal(positiveSum([-1, 2, 3, 4, -5]), 9);
  });
});
