// Boiled Eggs

import { assert } from 'chai';

export function cookingTime (eggs: number): number {
  const MAX_IN_POT = 8;
  const TIME_TO_BOIL = 5;

  const numBatch = Math.ceil(eggs / MAX_IN_POT);

  return numBatch * TIME_TO_BOIL;
}

describe('example', function () {
  it('test', function () {
    assert.strictEqual(cookingTime(0), 0, '0 eggs');
    assert.strictEqual(cookingTime(5), 5, '5 eggs');
    assert.strictEqual(cookingTime(10), 10, '10 eggs');
  });
});
