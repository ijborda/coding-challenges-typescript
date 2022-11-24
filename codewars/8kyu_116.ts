// What is between?

import { assert } from 'chai';

export function between (a: number, b: number): number[] {
  const length = b - a + 1;
  return Array.from({ length }, (_, i) => i + a);
}

describe('Basic tests', () => {
  it('Basic tests should work', () => {
    assert.deepEqual(between(1, 4), [1, 2, 3, 4]);
    assert.deepEqual(between(-2, 2), [-2, -1, 0, 1, 2]);
    assert.deepEqual(between(2, 2), []);
  });
});
