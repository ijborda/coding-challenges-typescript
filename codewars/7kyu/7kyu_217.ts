// Greatest common divisor

import { assert } from 'chai';

export function mygcd (x: number, y: number): number {
  return y ? mygcd(y, x % y) : x;
}

// Test
describe('Example tests', () => {
  it('Example tests', () => {
    assert.strictEqual(mygcd(30, 12), 6);
    assert.strictEqual(mygcd(36, 12), 12);
    assert.strictEqual(mygcd(8, 9), 1);
    assert.strictEqual(mygcd(1, 1), 1);
  });
});
