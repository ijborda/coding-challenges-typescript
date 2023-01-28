// Disemvowel Trolls

import { assert } from 'chai';

export class Kata {
  static disemvowel (str: string): string {
    return str.replace(/[aeiou]/gi, '');
  }
}

describe('disemvowel', function () {
  it('should pass a sample test', function () {
    assert.strictEqual(Kata.disemvowel('This website is for losers LOL!'), 'Ths wbst s fr lsrs LL!');
  });
});
