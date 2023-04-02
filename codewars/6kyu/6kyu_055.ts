// Character with longest consecutive repetition

import { assert } from 'chai';

export function longestRepetition (text: string): [string, number] {
  const splits = text.match(/(.)\1*/g) || [''];
  const maxLen = Math.max(...splits.map(sub => sub.length));
  const maxSub = splits.find(sub => sub.length === maxLen);
  return [maxSub ? maxSub[0] : '', maxLen];
}

// Test
describe('Example Tests', () => {
  it('should work with example tests', () => {
    assert.deepStrictEqual(longestRepetition('aaaabb'), ['a', 4]);
    assert.deepStrictEqual(longestRepetition('bbbaaabaaaa'), ['a', 4]);
    assert.deepStrictEqual(longestRepetition('cbdeuuu900'), ['u', 3]);
    assert.deepStrictEqual(longestRepetition('abbbbb'), ['b', 5]);
    assert.deepStrictEqual(longestRepetition('aabb'), ['a', 2]);
    assert.deepStrictEqual(longestRepetition('ba'), ['b', 1]);
    assert.deepStrictEqual(longestRepetition(''), ['', 0]);
  });
});
