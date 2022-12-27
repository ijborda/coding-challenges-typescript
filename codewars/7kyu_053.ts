// No oddities here

import { assert } from 'chai';

export function noOdds (values: number[]): number[] {
  return values.filter(a => a % 2 === 0);
}

describe('Testing some inputs', function () {
  it('should return [0] for [0,1]', function () {
    assert.deepEqual(noOdds([0, 1]), [0]);
  });
  it('should return [0,2] for [0,1,2,3]', function () {
    assert.deepEqual(noOdds([0, 1, 2, 3]), [0, 2]);
  });
});
