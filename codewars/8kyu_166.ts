// Find out whether the shape is a cube

import { assert } from 'chai';

export function cubeChecker (volume: number, side: number): boolean {
  if (volume <= 0 || side <= 0) {
    return false;
  }

  const volumeFromSide = side ** 3;

  return volumeFromSide === volume;
}

describe('Cube?', function () {
  it('Basic tests', function () {
    assert.isTrue(cubeChecker(1, 1));
    assert.isTrue(cubeChecker(8, 2));
    assert.isTrue(cubeChecker(27, 3));
    assert.isFalse(cubeChecker(0, 35));
    assert.isFalse(cubeChecker(452, 1));
    assert.isFalse(cubeChecker(785, 0));
  });
});
