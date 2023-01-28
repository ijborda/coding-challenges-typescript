// Alphabet symmetry

import { assert } from 'chai';

export function solve (arr: string[]) {
  return arr.map(a => calcCorrectPositions(a));
}

const calcCorrectPositions = (word: string): number => {
  return word.split('').reduce((acc, a, i) => {
    if (i === getPositionInAlphabet(a)) {
      return acc + 1;
    }
    return acc;
  }, 0);
};

const getPositionInAlphabet = (letter: string): number => {
  return letter.toLowerCase().charCodeAt(0) - 97;
};

describe('Fixed tests', function () {
  it('Testing for ["abode", "ABc", "xyzD"]', () => {
    assert.deepEqual(solve(['abode', 'ABc', 'xyzD']), [4, 3, 1]);
  });
  it('Testing for ["abide", "ABc", "xyz"]', () => {
    assert.deepEqual(solve(['abide', 'ABc', 'xyz']), [4, 3, 0]);
  });
  it('Testing for ["IAMDEFANDJKL", "thedefgh", "xyzDEFghijabc"]', () => {
    assert.deepEqual(solve(['IAMDEFANDJKL', 'thedefgh', 'xyzDEFghijabc']), [6, 5, 7]);
  });
  it('Testing for ["encode", "abc", "xyzD", "ABmD"]', () => {
    assert.deepEqual(solve(['encode', 'abc', 'xyzD', 'ABmD']), [1, 3, 1, 3]);
  });
});
