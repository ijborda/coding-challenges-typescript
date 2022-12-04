// Square(n) Sum

import { assert } from 'chai';

export function squareSum (numbers: number[]): number {
  return numbers.reduce((acc, a) => acc + a ** 2, 0);
}

describe('Sample Test Cases', function () {
  it('Should return a number', function () {
    assert.equal(squareSum([1, 2]), 5);
    assert.equal(squareSum([0, 3, 4, 5]), 50);
    assert.equal(squareSum([]), 0);
  });
});
