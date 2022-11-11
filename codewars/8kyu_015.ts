// Third Angle of a Triangle

import { assert } from 'chai';

const otherAngle = (a: number, b: number): number => {
  return 180 - a - b;
};

// Test
describe('otherAngle', function () {
  it('Sample Tests', function () {
    assert.strictEqual(otherAngle(30, 60), 90);
    assert.strictEqual(otherAngle(60, 60), 60);
    assert.strictEqual(otherAngle(43, 78), 59);
    assert.strictEqual(otherAngle(10, 20), 150);
  });
});
