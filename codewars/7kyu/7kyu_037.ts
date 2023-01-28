// Summing a number's digits

import { assert } from 'chai';

export function sumDigits (n: number): number {
  return n.toString().replace(/\D/g, '').split('').reduce((acc, a) => acc + +a, 0);
}

describe('example', function () {
  it('test', function () {
    assert.equal(sumDigits(10), 1);
    assert.equal(sumDigits(99), 18);
    assert.equal(sumDigits(-32), 5);
  });
});
