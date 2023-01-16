// The wheat/rice and chessboard problem

import { assert } from 'chai';

export function squaresNeeded (grains: number) {
  return grains ? Math.floor(1 + Math.log2(grains)) : 0;
}

describe('example', function () {
  it('tests', function () {
    assert.equal(squaresNeeded(0), 0);
    assert.equal(squaresNeeded(1), 1);
    assert.equal(squaresNeeded(2), 2);
    assert.equal(squaresNeeded(3), 2);
    assert.equal(squaresNeeded(4), 3);
  });
});
