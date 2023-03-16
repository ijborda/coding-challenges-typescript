// Persistent Bugger.

import { assert } from 'chai';

export function persistence (num: number): number {
  let steps = 0;
  while (num > 9) {
    num = num.toString().split('').reduce((acc, a) => acc * +a, 1);
    steps++;
  }
  return steps;
}

// Test
describe('Persistent Bugger.', () => {
  it('Fixed tests', () => {
    assert.strictEqual(persistence(39), 3);
    assert.strictEqual(persistence(4), 0);
    assert.strictEqual(persistence(25), 2);
    assert.strictEqual(persistence(999), 4);
  });
});
