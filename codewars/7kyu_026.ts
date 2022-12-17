// Sum of the first nth term of Series

import { assert } from 'chai';

export function SeriesSum (n:number):string {
  const arr = Array.from({ length: n }, (_, i) => 1 / (3 * i + 1));
  const sum = arr.reduce((acc, a) => acc + a, 0);
  return sum.toFixed(2);
}

describe('solution', function () {
  it('Basic Tests', function () {
    assert.equal(SeriesSum(1), '1.00');
    assert.equal(SeriesSum(2), '1.25');
    assert.equal(SeriesSum(3), '1.39');
    assert.equal(SeriesSum(4), '1.49');
  });
});
