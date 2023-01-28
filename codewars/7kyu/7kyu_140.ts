// Perimeter sequence

import { assert } from 'chai';

export function perimeterSequence (a: number, n: number): number {
  return a * n * 4;
}

describe('Perimeter sequence', () => {
  it('Fixed tests', () => {
    assert.strictEqual(perimeterSequence(1, 3), 12);
  });
});
