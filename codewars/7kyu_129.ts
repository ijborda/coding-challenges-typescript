// Search for letters

import { assert } from 'chai';

export function change (string: string): string {
  const NUM_ALPHABET = 26;
  const ALP_ASCII_START = 'a'.charCodeAt(0);

  return Array.from({ length: NUM_ALPHABET }, (_, i) => String.fromCharCode(i + ALP_ASCII_START))
    .map(a => string.toLowerCase().includes(a) ? 1 : 0)
    .join('');
}

describe('Search for letters', () => {
  it('example tests', () => {
    assert.strictEqual(change('a **&  bZ'), '11000000000000000000000001');
  });
});
