// Reversed Strings

import { assert } from 'chai';

export function solution (str: string): string {
  return str.split('').reverse().join('');
}

// Test
describe('Sample Test Cases', function () {
  it('Should return a string', function () {
    assert.equal(solution('world'), 'dlrow');
    assert.equal(solution('hello'), 'olleh');
    assert.equal(solution(''), '');
    assert.equal(solution('h'), 'h');
  });
});
