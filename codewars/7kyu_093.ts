// Return the closest number multiple of 10

import { assert } from 'chai';

export const closestMultiple10 = (num: number): number => {
  return Math.round(num / 10) * 10;
};

describe('closestMultiple10', function () {
  it('should return 50 for num = 54', function () {
    assert.equal(closestMultiple10(54), 50);
  });
  it('should return 60 for num = 55', function () {
    assert.equal(closestMultiple10(55), 60);
  });
});
