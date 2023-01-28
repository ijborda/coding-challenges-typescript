// Number of Divisions

import { assert } from 'chai';

export function divisions (n: number, divisor: number): number {
  return Math.floor(Math.log(n) / Math.log(divisor));
}

describe('Your solution', function () {
  it('should work for example tests', function () {
    assert.strictEqual(divisions(6, 2), 2);
    assert.strictEqual(divisions(100, 2), 6);
    assert.strictEqual(divisions(2450, 5), 4);
    assert.strictEqual(divisions(9999, 3), 8);
    assert.strictEqual(divisions(2, 3), 0);
    assert.strictEqual(divisions(5, 5), 1);
  });
});
