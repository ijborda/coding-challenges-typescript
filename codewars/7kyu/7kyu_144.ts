// Billiards triangle

import { assert } from 'chai';

export function pyramid (balls: number): number {
  return Math.floor((Math.sqrt(balls * 8 + 1) - 1) / 2);
}

describe('Billiards triangle', () => {
  it('Fixed tests', () => {
    assert.strictEqual(pyramid(1), 1);
    assert.strictEqual(pyramid(4), 2);
    assert.strictEqual(pyramid(20), 5);
    assert.strictEqual(pyramid(100), 13);
    assert.strictEqual(pyramid(2211), 66);
    assert.strictEqual(pyramid(9999), 140);
  });
});
