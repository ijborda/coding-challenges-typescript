// Invert values

import { assert } from 'chai';

export function invert (array: number[]): number[] {
  return array.map(a => a * -1);
}

describe('Invert array values', function () {
  it('Basic Tests', function () {
    assert.deepEqual(invert([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
    assert.deepEqual(invert([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5]);
    assert.deepEqual(invert([]), []);
    assert.deepEqual(invert([0]), [-0]);
  });
});
