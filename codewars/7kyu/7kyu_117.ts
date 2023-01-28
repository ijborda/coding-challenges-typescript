// Spoonerize Me

import { assert } from 'chai';

export function spoonerize (words: string): string {
  const word = words.split(' ');
  return `${word[1][0]}${word[0].slice(1)} ${word[0][0]}${word[1].slice(1)}`;
}

describe('spoonerize', function () {
  it('Basic Tests', function () {
    assert.strictEqual(spoonerize('not picking'), 'pot nicking');
    assert.strictEqual(spoonerize('wedding bells'), 'bedding wells');
    assert.strictEqual(spoonerize('jelly beans'), 'belly jeans');
    assert.strictEqual(spoonerize('pop corn'), 'cop porn');
  });
});
