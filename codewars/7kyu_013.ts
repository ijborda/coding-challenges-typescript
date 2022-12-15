// Complementary DNA

import { assert } from 'chai';

export class Kata {
  static dnaStrand (dna: string) {
    const rev = {
      A: 'T',
      T: 'A',
      G: 'C',
      C: 'G'
    };
    return dna.split('').map(a => rev[a as keyof typeof rev]).join('');
  }
}

describe('dnaStrand', function () {
  it('Sample tests', function () {
    assert.strictEqual(Kata.dnaStrand('AAAA'), 'TTTT', 'String AAAA is');
    assert.strictEqual(Kata.dnaStrand('ATTGC'), 'TAACG', 'String ATTGC is');
    assert.strictEqual(Kata.dnaStrand('GTAT'), 'CATA', 'String GTAT is');
  });
});
