// Counting Duplicates

import { assert } from 'chai';

export function duplicateCount (text: string): number {
  const upper = text.toUpperCase();
  const uniques = Array.from(new Set(upper.toUpperCase().split('')));
  const duplicates = uniques.filter(a => upper.indexOf(a) !== upper.lastIndexOf(a));
  return duplicates.length;
}

// Test
describe('example', function () {
  it('test', function () {
    assert.equal(duplicateCount(''), 0);
    assert.equal(duplicateCount('abcde'), 0);
    assert.equal(duplicateCount('aabbcde'), 2);
    assert.equal(duplicateCount('aabBcde'), 2, 'should ignore case');
    assert.equal(duplicateCount('Indivisibility'), 1);
    assert.equal(duplicateCount('Indivisibilities'), 2, 'characters may not be adjacent');
  });
});
