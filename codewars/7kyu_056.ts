// Find the vowels

import { assert } from 'chai';

export function vowelIndices (word: string): number[] {
  return word.split('').map((a, i) => /[aeiouy]/i.test(a) ? i + 1 : -1).filter(a => a !== -1);
}

describe('Basic tests', () => {
  it('Test', () => {
    assert.deepEqual(vowelIndices('mmm'), []);
    assert.deepEqual(vowelIndices('apple'), [1, 5]);
    assert.deepEqual(vowelIndices('super'), [2, 4]);
    assert.deepEqual(vowelIndices('orange'), [1, 3, 6]);
    assert.deepEqual(vowelIndices('supercalifragilisticexpialidocious'), [2, 4, 7, 9, 12, 14, 16, 19, 21, 24, 25, 27, 29, 31, 32, 33]);
    assert.deepEqual(vowelIndices('vnRrVNDMYeDntDJLNZi'), [9, 10, 19]);
  });
});
