// Beginner Series #2 Clock

import { assert } from 'chai';

export function past (h: number, m: number, s: number): number {
  enum Miliseconds {
    HOUR = 3600000,
    MIN = 60000,
    SEC = 1000
  }
  return h * Miliseconds.HOUR + m * Miliseconds.MIN + s * Miliseconds.SEC;
}

// Test
describe('Fixed Tests', () => {
  it('Tests', () => {
    assert.equal(past(0, 1, 1), 61000);
    assert.equal(past(1, 1, 1), 3661000);
    assert.equal(past(0, 0, 0), 0);
    assert.equal(past(1, 0, 1), 3601000);
    assert.equal(past(1, 0, 0), 3600000);
  });
});
