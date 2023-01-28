// All Star Code Challenge #18

import { assert } from 'chai';

export function strCount (str: string, letter: string): number {
  const re = new RegExp(letter, 'g');
  return (str.match(re) || []).length;
}

// Test
describe('Sample Test Cases', function () {
  it('Testing for fixed test', () => {
    assert.strictEqual(strCount('Hello', 'o'), 1);
    assert.strictEqual(strCount('Hello', 'l'), 2);
    assert.strictEqual(strCount('', 'z'), 0);
  });
});
