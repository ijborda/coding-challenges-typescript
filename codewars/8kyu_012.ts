// Will you make it?

import { assert } from 'chai';

const zeroFuel = (distance: number, mpg: number, fuelLeft: number): boolean => {
  return distance <= (mpg * fuelLeft);
};

// Test
describe('zeroFill', function () {
  it('Sample Tests', function () {
    assert.equal(zeroFuel(50, 25, 2), true);
    assert.equal(zeroFuel(100, 50, 1), false);
  });
});
