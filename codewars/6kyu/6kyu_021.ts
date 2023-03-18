// Detect Pangram

import { assert } from 'chai';

export const isPangram = (phrase: string): boolean => {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  return ALPHABET.split('').every(a => phrase.toLowerCase().indexOf(a) !== -1);
};

// Alternative
// export const isPangram = (phrase: string): boolean => {
//   return new Set(phrase.toLowerCase().match(/[a-z]/g)).size === 26;
// };

// Test
describe('example', function () {
  it('test', function () {
    assert.strictEqual(isPangram('The quick brown fox jumps over the lazy dog.'), true);
    assert.strictEqual(isPangram('This is not a pangram.'), false);
  });
});
