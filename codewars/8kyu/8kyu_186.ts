// Transpose two strings in an array

import { assert } from 'chai';

export function transposeTwoStrings ([s1, s2]: string[]): string {
  const length = Math.max(s1.length, s2.length);
  return Array.from({ length }, (_, i) => `${s1[i] || ' '} ${s2[i] || ' '}`).join('\n');
}

describe('solution', function () {
  it('basicTests', function () {
    assert.strictEqual(transposeTwoStrings(['Hello', 'World']), 'H W\ne o\nl r\nl l\no d', 'Should return H W\ne o\nl r\nl l\no d');
    assert.strictEqual(transposeTwoStrings(['joey', 'louise']), 'j l\no o\ne u\ny i\n  s\n  e', 'Should return j l\no o\ne u\ny i\n  s\n  e');
    assert.strictEqual(transposeTwoStrings(['a', 'cat']), 'a c\n  a\n  t', 'Should return a c\n  a\n  t');
    assert.strictEqual(transposeTwoStrings(['cat', '']), 'c  \na  \nt  ', 'Should return c  \na  \nt  ');
    assert.strictEqual(transposeTwoStrings(['!a!a!', '?b?b']), '! ?\na b\n! ?\na b\n!  ', 'Should return ! ?\na b\n! ?\na b\n!  ');
  });
});
