// Predict your age!

import { assert } from 'chai';

export function predictAge (...ages: number[]): number {
  const ans = Math.sqrt(ages.reduce((acc, a) => acc + a ** 2, 0)) / 2;
  return Math.floor(ans);
}

describe('predictAge', function () {
  it('Sample tests', function () {
    assert.equal(predictAge(65, 60, 75, 55, 60, 63, 64, 45), 86);
    assert.equal(predictAge(32, 54, 76, 65, 34, 63, 64, 45), 79);
  });
});
