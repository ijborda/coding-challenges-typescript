// Remove String Spaces

import { assert } from 'chai';

export function firstNonConsecutive (arr: number[]) : null | number {
  const num = arr.find((current, i, array) => current - array[i - 1] > 1);
  return num || num === 0 ? num : null;
}

describe('a positive example', function () {
  it('returns 6', function () {
    const first = firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]);
    assert.equal(first, 6);
  });
  it('handles empty array', function () {
    const first = firstNonConsecutive([]);
    assert.isNull(first);
  });
  it('handles array with one element', function () {
    const first = firstNonConsecutive([1]);
    assert.isNull(first);
  });
  it('handles array with no match', function () {
    const first = firstNonConsecutive([1, 2, 3, 4, 5, 6]);
    assert.isNull(first);
  });
  it('handles array with 0 as answer', function () {
    const first = firstNonConsecutive([-5, -4, -3, -2, 0, 2, 3, 4]);
    assert.equal(first, 0);
  });
});
