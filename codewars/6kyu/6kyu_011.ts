// Counting Duplicates

import { assert } from 'chai';

export function duplicateEncode (word: string) {
  enum char {
    dup = ')',
    unq = '('
  }
  return word.toLowerCase()
    .split('')
    .map((a, _, arr) => arr.indexOf(a) === arr.lastIndexOf(a) ? char.unq : char.dup)
    .join('');
}

// Test
describe('example', function () {
  it('test', function () {
    assert.strictEqual(duplicateEncode('din'), '(((');
    assert.strictEqual(duplicateEncode('recede'), '()()()');
    assert.strictEqual(duplicateEncode('Success'), ')())())', 'should ignore case');
    assert.strictEqual(duplicateEncode('(( @'), '))((');
  });
});
