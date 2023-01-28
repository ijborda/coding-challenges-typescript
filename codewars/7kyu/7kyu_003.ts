// Square Every Digit

import { assert } from 'chai';

export class Kata {
  static squareDigits (num: number): number {
    return +num.toString().split('').map(a => Math.pow(+a, 2)).join('');
  }
}

describe('squareDigits', function () {
  it('should pass a sample test', function () {
    assert.strictEqual(Kata.squareDigits(9119), 811181);
    assert.strictEqual(Kata.squareDigits(0), 0);
  });
});
