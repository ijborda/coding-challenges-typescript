// Number of People in the Bus

import { assert } from 'chai';

export function number (busStops: [number, number][]): number {
  return busStops.reduce((acc, a) => acc + a[0] - a[1], 0);
}

describe('number', () => {
  it('basic tests', () => {
    assert.equal(number([[10, 0], [3, 5], [5, 8]]), 5);
    assert.equal(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]), 17);
    assert.equal(number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]), 21);
    assert.equal(number([[0, 0]]), 0);
  });
});
