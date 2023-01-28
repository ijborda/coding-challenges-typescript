// Beginner Series #4 Cockroach

import { assert } from 'chai';

export function cockroachSpeed (s: number): number {
  const CMSEC = 27.7778;
  return Math.floor(s * CMSEC);
}

// Test
describe('Cockroach ! ! !', () => {
  it('Fixed tests', () => {
    assert.strictEqual(cockroachSpeed(1.08), 30);
    assert.strictEqual(cockroachSpeed(1.09), 30);
    assert.strictEqual(cockroachSpeed(0), 0);
  });
});
