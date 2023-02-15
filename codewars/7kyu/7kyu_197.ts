// Square Pi's

import { assert } from 'chai';

export function squarePi (digits: number): number {
  const PI = '31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679';
  return Math.ceil(Math.hypot(...PI.slice(0, digits).split('').map(Number)));
}

// Test
describe('fixedTests', function () {
  it('5 digits', function () {
    assert.deepEqual(squarePi(5), 8);
  });
  it('10 digits', function () {
    assert.deepEqual(squarePi(10), 15);
  });
});
