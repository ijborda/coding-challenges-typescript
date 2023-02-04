// Single digit

import { assert } from 'chai';

export function singleDigit (n: number): number {
  while (n.toString().length !== 1) {
    n = ((n >>> 0).toString(2).match(/1/g) || []).length;
  }
  return n;
}

describe('Basic Tests', () => {
  it('Should return a single digit integer', () => {
    assert.strictEqual(singleDigit(5), 5);
    assert.strictEqual(singleDigit(999), 8);
    assert.strictEqual(singleDigit(1234444123), 1);
    assert.strictEqual(singleDigit(443566), 2);
    assert.strictEqual(singleDigit(565656565), 3);
    assert.strictEqual(singleDigit(4868872), 8);
    assert.strictEqual(singleDigit(234234235), 2);
    assert.strictEqual(singleDigit(567448), 7);
    assert.strictEqual(singleDigit(1000000000), 3);
  });
});
