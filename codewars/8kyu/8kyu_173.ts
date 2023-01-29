// Cryptanalysis Word Patterns

import { assert } from 'chai';

export function wordPattern (word: string): string {
  let count = -1;
  const found: {[key: string]: number} = {};
  return word.toLowerCase().split('').map(a => {
    if (!(a in found)) {
      count += 1;
      found[a] = count;
    }
    return found[a];
  }).join('.');
}

describe('Should pass fixed Tests', function () {
  it('Example tests', function () {
    assert.deepEqual(wordPattern('hello'), '0.1.2.2.3');
    assert.deepEqual(wordPattern('heLlo'), '0.1.2.2.3');
    assert.deepEqual(wordPattern('helLo'), '0.1.2.2.3');
    assert.deepEqual(wordPattern('Hippopotomonstrosesquippedaliophobia'), '0.1.2.2.3.2.3.4.3.5.3.6.7.4.8.3.7.9.7.10.11.1.2.2.9.12.13.14.1.3.2.0.3.15.1.13');
  });
});
