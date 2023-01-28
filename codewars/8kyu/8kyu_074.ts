// Find Nearest square number

import { assert } from 'chai';

export function nearestSq (n : number) : number {
  return Math.round(Math.sqrt(n)) ** 2;
}

// Test
describe('Basic tests', () => {
  it('basic tests', () => {
    assert.equal(nearestSq(1), 1);
    assert.equal(nearestSq(2), 1);
    assert.equal(nearestSq(10), 9);
    assert.equal(nearestSq(111), 121);
    assert.equal(nearestSq(9999), 10000);
  });
});
