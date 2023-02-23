// Upstream/Downstream

import { assert } from 'chai';

export function time (distance:number, boatSpeed:number, stream:string):number {
  const [streamDir, streamSpeed] = stream.split(' ');
  const netSpeed = boatSpeed + ((streamDir === 'Upstream' ? -1 : 1) * +streamSpeed);
  return +(distance / netSpeed).toFixed(2);
}

// Test
describe('solution', function () {
  it('Basic Tests', function () {
    assert.equal(time(24, 10, 'Downstream 2'), 2);
    assert.equal(time(24, 14, 'Upstream 2'), 2);
    assert.equal(time(54, 28, 'Downstream 3'), 1.74);
  });
});
