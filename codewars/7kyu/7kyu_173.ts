// String prefix and suffix

import { assert } from 'chai';

export function solve (s: string): number {
  let count = 0;
  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    if (s.substring(0, i) === s.substring(s.length - i)) {
      count = i;
    }
  }
  return count;
}

// Test
describe('Basic tests', function () {
  it('Testing for abcd', () => assert.strictEqual(solve('abcd'), 0));
  it('Testing for abcda', () => assert.strictEqual(solve('abcda'), 1));
  it('Testing for abcdabc', () => assert.strictEqual(solve('abcdabc'), 3));
  it('Testing for abcabc', () => assert.strictEqual(solve('abcabc'), 3));
  it('Testing for abcabca', () => assert.strictEqual(solve('abcabca'), 1));
  it('Testing for abcdabcc', () => assert.strictEqual(solve('abcdabcc'), 0));
  it('Testing for aaaaa', () => assert.strictEqual(solve('aaaaa'), 2));
  it('Testing for aaaa', () => assert.strictEqual(solve('aaaa'), 2));
  it('Testing for aaa', () => assert.strictEqual(solve('aaa'), 1));
  it('Testing for aa', () => assert.strictEqual(solve('aa'), 1));
  it('Testing for a', () => assert.strictEqual(solve('a'), 0));
  it('Testing for acbacc', () => assert.strictEqual(solve('acbacc'), 0));
});
