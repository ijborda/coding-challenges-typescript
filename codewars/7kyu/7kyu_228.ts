// Merge overlapping strings

import { assert } from 'chai';

export const mergeStrings = (first: string, second: string): string => {
  let overlap = '';

  for (let i = 1; i <= second.length; i++) {
    const overlapTemp = second.substring(0, i);
    if (first.endsWith(overlapTemp) && overlapTemp.length > overlap.length) {
      overlap = overlapTemp;
    }
  }

  return `${first}${second.substring(overlap.length)}`;
};

// Test
describe('mergeStrings', function () {
  it('"Example 1"', () => {
    const expected = 'abcdefgh';
    const actual = mergeStrings('abcde', 'cdefgh');
    assert.equal(actual, expected);
  });

  it('"Example 2"', () => {
    const expected = 'abaabab';
    const actual = mergeStrings('abaab', 'aabab');
    assert.equal(actual, expected);
  });

  it('"Example 3"', () => {
    const expected = 'abaabaabab';
    const actual = mergeStrings('abaabaab', 'aabaabab');
    assert.equal(actual, expected);
  });
});
