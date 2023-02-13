// Hands Up

import { assert } from 'chai';

export function getPositions (s: number): number[] {
  const NUM_PEOPLE = 3;
  return Array.from({ length: NUM_PEOPLE }, (_, i) => i)
    .map(a => Math.floor(s % Math.pow(NUM_PEOPLE, a + 1) / Math.pow(NUM_PEOPLE, a)));
}

// Test
describe('Hands Up', () => {
  it('Basic tests', () => {
    assert.deepEqual(getPositions(54), [0, 0, 0]);
    assert.deepEqual(getPositions(98), [2, 2, 1]);
    assert.deepEqual(getPositions(3), [0, 1, 0]);
    assert.deepEqual(getPositions(13), [1, 1, 1]);
    assert.deepEqual(getPositions(213), [0, 2, 2]);
    assert.deepEqual(getPositions(2147483647), [1, 0, 1]);
    assert.deepEqual(getPositions(1340254), [1, 0, 0]);
    assert.deepEqual(getPositions(26), [2, 2, 2]);
    assert.deepEqual(getPositions(27), [0, 0, 0]);
  });
});
