// Consecutive strings

import { assert } from 'chai';

export function longestConsec (strarr: string[], k: number): string {
  return strarr.reduce((max, _, i, arr) => {
    const concat = arr.slice(i + 1 - k, i + 1).join('');
    return i >= k - 1 && concat.length > max.length ? concat : max;
  }, '');
}

// Test
describe('Fixed Tests', function () {
  it('Basic tests longestConsec', function () {
    assert.strictEqual(longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2), 'abigailtheta');
    assert.strictEqual(longestConsec(['ejjjjmmtthh', 'zxxuueeg', 'aanlljrrrxx', 'dqqqaaabbb', 'oocccffuucccjjjkkkjyyyeehh'], 1), 'oocccffuucccjjjkkkjyyyeehh');
    assert.strictEqual(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3), 'ixoyx3452zzzzzzzzzzzz');
  });
});
