// Volume of a Cuboid

import { assert } from 'chai';

export function getVolumeOfCuboid (length: number, width:number, height:number): number {
  return length * width * height;
}

// Test
describe('Some testing', function () {
  it('Sample tests', function () {
    assert.equal(getVolumeOfCuboid(1, 2, 2), 4);
    assert.equal(getVolumeOfCuboid(6.3, 2, 5), 63);
    assert.equal(getVolumeOfCuboid(1, 1, 1), 1);
    assert.equal(getVolumeOfCuboid(52, 17, 5), 4420);
  });
});
