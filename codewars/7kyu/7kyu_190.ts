// Spinning Rings

import { assert } from 'chai';

export function spinningRings (innerMax: number, outerMax: number): number {
  let numberOfSpinsTillRingsAreEqual = 1;
  let inner = innerMax;
  let outer = 1;
  while (inner !== outer) {
    inner = inner - 1 < 0 ? innerMax : inner - 1;
    outer = outer + 1 > outerMax ? 0 : outer + 1;
    numberOfSpinsTillRingsAreEqual++;
  }
  return numberOfSpinsTillRingsAreEqual;
}

// Test
describe('Spinning Rings', function () {
  it('should work for a few cases', function () {
    assert.strictEqual(spinningRings(2, 3), 5);
    assert.strictEqual(spinningRings(3, 2), 2);
    assert.strictEqual(spinningRings(1, 1), 1);
    assert.strictEqual(spinningRings(2, 2), 3);
    assert.strictEqual(spinningRings(3, 3), 2);
  });
});
