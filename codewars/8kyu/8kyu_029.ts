// Drying Potatoes

import { assert } from 'chai';

export function potatoes (p0: number, w0: number, p1: number): number {
  const dryMatterContent = w0 * (100 - p0) / 100;
  return Math.floor(100 * dryMatterContent / (100 - p1));
}

// Test
describe('Fixed Tests', function () {
  it('potatoes', function () {
    assert.strictEqual(potatoes(82, 127, 80), 114);
    assert.strictEqual(potatoes(93, 129, 91), 100);
  });
});
