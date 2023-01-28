// For Twins: 2. Math operations

import { assert } from 'chai';

export const iceBrickVolume = (radius: number, bottleLength: number, rimLength: number): number => {
  const baseArea = 2 * Math.pow(radius, 2);
  const height = bottleLength - rimLength;

  const volume = baseArea * height;

  return volume;
};

describe('Tests', function () {
  it('should pass sample tests', () => {
    assert.equal(iceBrickVolume(1, 10, 2), 16);
    assert.equal(iceBrickVolume(5, 30, 7), 1150);
  });
});
