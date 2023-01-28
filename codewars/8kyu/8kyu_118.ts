// Find numbers which are divisible by given number

import { assert } from 'chai';

export function divisibleBy (numbers: number[], divisor: number): number[] {
  return numbers.filter(a => a % divisor === 0);
}

describe('Fixed tests', () => {
  it('should pass fixed tests', () => {
    assert.deepEqual(divisibleBy([1, 2, 3, 4, 5, 6], 2), [2, 4, 6]);
    assert.deepEqual(divisibleBy([1, 2, 3, 4, 5, 6], 3), [3, 6]);
    assert.deepEqual(divisibleBy([0, 1, 2, 3, 4, 5, 6], 4), [0, 4]);
  });
});
