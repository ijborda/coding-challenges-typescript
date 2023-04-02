// Length of missing array

import { assert } from 'chai';

export function getLengthOfMissingArray (arrayOfArrays:any[]):number {
  const sortedLengths = arrayOfArrays.map(arr => (arr || []).length).sort((a, b) => a - b);
  if (sortedLengths.length === 0 || sortedLengths.some(len => len === 0)) {
    return 0;
  }
  return sortedLengths.find((len, i, arr) => i !== 0 && len - arr[i - 1] !== 1) - 1;
}

// Test
describe('solution', function () {
  it('Basic Tests', function () {
    assert.strictEqual(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]), 3);
    assert.strictEqual(getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]), 2);
    assert.strictEqual(getLengthOfMissingArray([[null], [null, null, null]]), 2);
    assert.strictEqual(getLengthOfMissingArray([['a', 'a', 'a'], ['a', 'a'], ['a', 'a', 'a', 'a'], ['a'], ['a', 'a', 'a', 'a', 'a', 'a']]), 5);
    assert.strictEqual(getLengthOfMissingArray([]), 0);
    assert.strictEqual(getLengthOfMissingArray([null, null, null]), 0);
    assert.strictEqual(getLengthOfMissingArray([
      [],
      [2],
      [2, 3],
      [2, 1, 4, 2],
      [4, 1, 1, 3, 1],
      [1, 1, 4, 3, 2, 1, 4, 1],
      [4, 1, 2, 1, 2, 1],
      [1, 3, 3, 0, 1, 4, 3]]), 0);
  });
});
