// Is It Negative Zero (-0)?

import { assert } from 'chai';

export function isNegativeZero (n: number): boolean {
  return Object.is(n, -0);
}

describe('Tests', function () {
  it('should return true for -0', function () {
    assert.strictEqual(isNegativeZero(-0), true);
  });

  it('should return false for non-negative-zero numbers', function () {
    assert.strictEqual(isNegativeZero(-Infinity), false);
    assert.strictEqual(isNegativeZero(-5), false);
    assert.strictEqual(isNegativeZero(-4), false);
    assert.strictEqual(isNegativeZero(-3), false);
    assert.strictEqual(isNegativeZero(-2), false);
    assert.strictEqual(isNegativeZero(-1), false);
    assert.strictEqual(isNegativeZero(-Number.MIN_VALUE), false);
    assert.strictEqual(isNegativeZero(0), false);
    assert.strictEqual(isNegativeZero(Number.MIN_VALUE), false);
    assert.strictEqual(isNegativeZero(1), false);
    assert.strictEqual(isNegativeZero(2), false);
    assert.strictEqual(isNegativeZero(3), false);
    assert.strictEqual(isNegativeZero(4), false);
    assert.strictEqual(isNegativeZero(5), false);
    assert.strictEqual(isNegativeZero(Infinity), false);
  });
});
