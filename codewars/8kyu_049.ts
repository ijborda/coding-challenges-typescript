// Area of a Square

import { assert } from 'chai';

export const squareArea = (num : number) : number => {
  const lengthOfSquare = (num * 4) / (2 * Math.PI);
  return lengthOfSquare ** 2;
};

// Test
const DELTA = 0.05;

describe('Fixed tests', function () {
  it('Testing for 2', function () {
    assert.approximately(squareArea(2), 1.62, DELTA);
  });
  it('Testing for 0', function () {
    assert.approximately(squareArea(0), 0, DELTA);
  });
  it('Testing for 14.05', function () {
    assert.approximately(squareArea(14.05), 80, DELTA);
  });
});
