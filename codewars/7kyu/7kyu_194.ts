// Hero's root

import { assert } from 'chai';

export function pointInCircle (x: number, y: number): boolean {
  return Math.hypot(x, y) < 1;
}

// Test
describe('Tests', () => {
  it('test', () => {
    assert.isTrue(pointInCircle(0, 0), 'Origin is inside');
    assert.isFalse(pointInCircle(0, -1), '(0, -1) is outside');
    assert.isFalse(pointInCircle(2, 0), '(2, 0) is outside');
    assert.isTrue(pointInCircle(0, 0.9), '(0, 0.9) is inside');
    assert.isTrue(pointInCircle(0.5, 0.5), '(0.5, 0.5) is inside');
  });
});
