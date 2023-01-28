// Vowel Count

import { assert } from 'chai';

export class Kata {
  static getCount (str: string): number {
    return str.replace(/[^aeiou]/g, '').length;
  }
}

describe('getCount', function () {
  it('should pass a sample test', function () {
    assert.strictEqual(Kata.getCount('abracadabra'), 5);
  });
});
