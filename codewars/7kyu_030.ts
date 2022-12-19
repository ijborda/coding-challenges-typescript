// Breaking chocolate problem

import { assert } from 'chai';

export function breakChocolate (n: number, m: number): number {
  return Math.max(0, m * n - 1);
}

describe('Breaking chocolate', () => {
  it('Fixed tests', () => {
    assert.strictEqual(breakChocolate(5, 5), 24);
    assert.strictEqual(breakChocolate(7, 4), 27);
    assert.strictEqual(breakChocolate(1, 1), 0);
    assert.strictEqual(breakChocolate(0, 0), 0, 'What If I Told You There is No Chocolate?');
    assert.strictEqual(breakChocolate(6, 1), 5);
  });
});
