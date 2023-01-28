// Even numbers in an array

import { assert } from 'chai';

export function evenNumbers (array: number[], n: number): number[] {
  return array.filter(a => a % 2 === 0).slice(-n);
}

describe('Sample Test Cases', function () {
  it('Should return an array', function () {
    assert.deepEqual(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8]);
    assert.deepEqual(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26]);
    assert.deepEqual(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6]);
  });
});
