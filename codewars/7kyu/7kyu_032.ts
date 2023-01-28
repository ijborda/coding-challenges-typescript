// Count the Digit

import { assert } from 'chai';

export function twoOldestAges (ages: number[]): number[] {
  return ages.sort((a, b) => b - a).slice(0, 2).reverse();
}

describe('Two Oldest Age', () => {
  it('twoOldestAges([1,5,87,45,8,8]) should return [45,87]', () => {
    assert.deepEqual(twoOldestAges([1, 5, 87, 45, 8, 8]), [45, 87]);
  });
});
