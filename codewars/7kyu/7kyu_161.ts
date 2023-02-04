// Integer Difference

import { assert } from 'chai';

export const intDiff = (arr: number[], n: number): number => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) === n) {
        count++;
      }
    }
  }

  return count;
};

describe('Solution', () => {
  it('should work for basic tests', () => {
    assert.equal(intDiff([1, 6, 2, 3, 7, 8, 7], 0), 1);
    assert.equal(intDiff([1, 1, 5, 6, 9, 16, 27], 4), 3);
    assert.equal(intDiff([1, 1, 3, 3], 2), 4);
  });
});
