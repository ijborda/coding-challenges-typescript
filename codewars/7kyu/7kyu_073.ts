// Averages of numbers

import { assert } from 'chai';

export function averages (numbers: number[] | null): number[] {
  if (numbers === null || numbers.length < 2) {
    return [];
  }
  return numbers.reduce((acc, a, i, arr) => {
    if (i !== 0) {
      const average = (arr[i - 1] + a) / 2;
      acc.push(average);
    }
    return acc;
  }, [] as number[]);
}

describe('solution', function () {
  it('Basic Tests', function () {
    assert.deepEqual(averages([2, 2, 2, 2, 2]), [2, 2, 2, 2]);
    assert.deepEqual(averages([2, -2, 2, -2, 2]), [0, 0, 0, 0]);
    assert.deepEqual(averages([1, 3, 5, 1, -10]), [2, 4, 3, -4.5]);
    assert.deepEqual(averages([]), []);
    assert.deepEqual(averages(null), []);
  });
});
