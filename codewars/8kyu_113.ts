// Opposite number

import { assert } from 'chai';

export class Kata {
  static opposite (n: number) {
    return n * -1;
  }
}

describe('opposite', function () {
  it('Sample Test', function () {
    assert.strictEqual(Kata.opposite(1), -1);
  });
});
