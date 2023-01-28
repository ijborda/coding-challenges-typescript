// Function 2 - squaring an argument

import { assert } from 'chai';

const square = (n: number): number => {
  return n ** 2;
};

// Test
const DELTA = 0.05;
describe('Tests', function () {
  it('Fixed tests', function () {
    assert.approximately(square(2), 4, DELTA);
    assert.approximately(square(0), 0, DELTA);
    assert.approximately(square(1), 1, DELTA);
    assert.approximately(square(12), 144, DELTA);
    assert.approximately(square(100), 10000, DELTA);
    assert.approximately(square(3), 9, DELTA);
    assert.approximately(square(5), 25, DELTA);
    assert.approximately(square(-2), 4, DELTA);
    assert.approximately(square(-2.2), 4.84, DELTA);
  });
});
