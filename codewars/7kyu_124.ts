// Absent vowel

import { assert } from 'chai';

export function absentVowel (x: string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.findIndex(vowel => !x.includes(vowel));
}

describe('example', function () {
  it('test', function () {
    assert.equal(absentVowel('John Doe hs seven red pples under his bsket'), 0);
    assert.equal(absentVowel('Bb Smith sent us six neatly arranged range bicycles'), 3);
  });
});
