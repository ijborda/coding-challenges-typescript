// Check the exam

import { assert } from 'chai';

export function checkExam (array1: string[], array2: string[]): number {
  let score = 0;
  array2.forEach((a, i) => {
    if (a === array1[i]) {
      score += 4;
    } else if (a === '') {
      score += 0;
    } else {
      score -= 1;
    }
  });
  return Math.max(0, score);
}

describe('Basic tests', () => {
  it('Should pass basic tests', () => {
    assert.equal(checkExam(['a', 'a', 'b', 'b'], ['a', 'c', 'b', 'd']), 6);
    assert.equal(checkExam(['a', 'a', 'c', 'b'], ['a', 'a', 'b', '']), 7);
    assert.equal(checkExam(['a', 'a', 'b', 'c'], ['a', 'a', 'b', 'c']), 16);
    assert.equal(checkExam(['b', 'c', 'b', 'a'], ['', 'a', 'a', 'c']), 0);
  });
});
