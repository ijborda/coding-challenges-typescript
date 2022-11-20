// Subtract the Sum

import { assert } from 'chai';

export function howMuchILoveYou (petals: number): string {
  const PETALS = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
  return PETALS[(petals - 1) % PETALS.length];
}

describe('I love you...', function () {
  it('Basic tests', function () {
    assert.equal(howMuchILoveYou(7), 'I love you', 'Number of petals can be higher than 6');
    assert.equal(howMuchILoveYou(3), 'a lot');
    assert.equal(howMuchILoveYou(6), 'not at all');
    assert.equal(howMuchILoveYou(241), 'I love you');
    assert.equal(howMuchILoveYou(350), 'a little');
    assert.equal(howMuchILoveYou(210), 'not at all');
  });
});
