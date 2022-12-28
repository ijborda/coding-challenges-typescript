// Most digits

import { assert } from 'chai';

export class Kata {
  static findLongest (array:number[]):number {
    const maxDigit = Math.max(...array.map(a => a.toString().length));
    return array.find(a => a.toString().length === maxDigit) as number;
  }
}

describe('solution', function () {
  it('basic tests', function () {
    assert.strictEqual(Kata.findLongest([1, 10, 100]), 100);
    assert.strictEqual(Kata.findLongest([9000, 8, 800]), 9000);
    assert.strictEqual(Kata.findLongest([8, 900, 500]), 900);
  });
});
