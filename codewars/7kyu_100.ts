// Simple Fun #37: House Numbers Sum

import { assert } from 'chai';

export function houseNumbersSum (houses: number[]): number {
  let sum = 0;

  for (const house of houses) {
    if (house === 0) {
      break;
    }
    sum += house;
  }

  return sum;
}

describe('Basic Tests', function () {
  it('It should work for basic tests.', function () {
    assert.equal(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]), 11);
    assert.equal(houseNumbersSum([4, 2, 1, 6, 0]), 13);
    assert.equal(houseNumbersSum([4, 1, 2, 3, 0, 10, 2]), 10);
    assert.equal(houseNumbersSum([0, 1, 2, 3, 4, 5]), 0);
  });
});
