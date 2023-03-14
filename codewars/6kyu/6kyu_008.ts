// Create Phone Number

import { assert } from 'chai';

export function findOutlier (integers: number[]): number {
  const even: number[] = [];
  const odd: number[] = [];

  for (const num of integers) {
    num % 2 ? odd.push(num) : even.push(num);
    if (even.length >= 2 && odd.length === 1) {
      return odd[0];
    }
    if (odd.length >= 2 && even.length === 1) {
      return even[0];
    }
  }

  return 0;
}

// Test
it('Simple tests', function () {
  assert.equal(findOutlier([0, 1, 2]), 1);
  assert.equal(findOutlier([1, 2, 3]), 2);
  assert.equal(findOutlier([2, 6, 8, 10, 3]), 3);
  assert.equal(findOutlier([0, 0, 3, 0, 0]), 3);
  assert.equal(findOutlier([1, 1, 0, 1, 1]), 0);
});
