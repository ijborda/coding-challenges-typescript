// Stacked Balls - 2D

import { assert } from 'chai';

export function stackHeight2d (layers: number) {
  return layers <= 1 ? layers : 1 + ((layers - 1) * Math.sqrt(3) / 2);
}

// Test
describe('Basic tests', function () {
  it('test0', () => assert.closeTo(stackHeight2d(0), 0.0, 0.001));
  it('test1', () => assert.closeTo(stackHeight2d(1), 1.0, 0.001));
  it('test2', () => assert.closeTo(stackHeight2d(2), 1.866, 0.001));
});
