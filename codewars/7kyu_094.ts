// Word values

import { assert } from 'chai';

export function wordValue (arr: string[]): number[] {
  return arr.map((word, i) => sumWord(word) * (i + 1));
}

const sumWord = (str: string): number => {
  return str.split('').reduce((acc, a) => acc + (a === ' ' ? 0 : letterPostition(a)), 0);
};

const letterPostition = (str: string): number => {
  const BASE = 'a'.charCodeAt(0);
  return str.charCodeAt(0) - BASE + 1;
};

describe('Word values', () => {
  it('fixed tests', () => {
    assert.deepEqual(wordValue(['codewars', 'abc', 'xyz']), [88, 12, 225]);
    assert.deepEqual(wordValue(['abc abc', 'abc abc', 'abc', 'abc']), [12, 24, 18, 24]);
    assert.deepEqual(wordValue(['abc', 'abc', 'abc', 'abc']), [6, 12, 18, 24]);
    assert.deepEqual(wordValue(['abcdefghijklmnopqrstuvwxyz', 'stamford bridge', 'haskellers']), [351, 282, 330]);
    assert.deepEqual(wordValue(['i love coding', 'better than pizza', 'i got this']), [115, 382, 321]);
    assert.deepEqual(wordValue(['mercury', 'venus', 'earth mars', 'jupiter saturn', 'uranus neptune']), [103, 162, 309, 768, 945]);
    assert.deepEqual(wordValue(['a cup', 'some tea', 'more coffee', 'one glass']), [41, 156, 273, 368]);
    assert.deepEqual(wordValue(['a', 'e', 'i', 'o', 'u', 'the end']), [1, 10, 27, 60, 105, 336]);
    assert.deepEqual(wordValue(['coding', 'better pizza', 'i got this too']), [52, 296, 471]);
  });
});
