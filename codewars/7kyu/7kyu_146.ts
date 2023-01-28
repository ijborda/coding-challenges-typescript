// Hungarian Vowel Harmony (easy)

import { assert } from 'chai';

export function dative (word: string): string | undefined {
  enum SUFFIX {
    FRONT = 'nek',
    BACK = 'nak'
  }
  const FRONT_VOWELS = ['e', 'é', 'i', 'í', 'ö', 'ő', 'ü', 'ű'];
  const BACK_VOWELS = ['a', 'á', 'o', 'ó', 'u', 'ú'];

  const lastVowel = word.split('').reverse().find(a => [...FRONT_VOWELS, ...BACK_VOWELS].includes(a));
  const suffix = lastVowel && FRONT_VOWELS.includes(lastVowel) ? SUFFIX.FRONT : SUFFIX.BACK;

  return word + suffix;
}

describe('Sample Tests', () => {
  it('should work with sample tests', () => {
    const tests: string[][] = [
      // [input, expected]
      ['ablak', 'ablaknak'],
      ['tükör', 'tükörnek'],
      ['keret', 'keretnek'],
      ['otthon', 'otthonnak'],
      ['virág', 'virágnak'],
      ['tett', 'tettnek'],
      ['rokkant', 'rokkantnak'],
      ['rossz', 'rossznak'],
      ['gonosz', 'gonosznak']
    ];

    for (let i = 0, l = tests.length; i < l; i++) {
      const [input, expected] = tests[i];
      console.log(input + ' -> ' + expected);
      assert.equal(dative(input), expected);
    }
  });
});
