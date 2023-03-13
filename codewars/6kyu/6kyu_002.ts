// Stop gninnipS My sdroW!

import { assert } from 'chai';

export function spinWords (words: string): string {
  return words
    .split(' ')
    .map(word => word.length >= 5 ? word.split('').reverse().join('') : word)
    .join(' ');
}

// Test
describe('spinWords', () => {
  it('should pass some fixed tests', () => {
    assert.strictEqual(spinWords('Hey fellow warriors'), 'Hey wollef sroirraw');
  });
});
