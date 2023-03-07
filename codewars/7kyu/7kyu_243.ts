// Boxlines

import { assert } from 'chai';
import * as chai from 'chai';

export function f (x: number, y: number, z: number): number {
  return 3 * (x * y * z) + 2 * (x * y + x * z + y * z) + x + y + z;
}

// Test
chai.config.truncateThreshold = 0;
describe('Boxlines', () => {
  it('Fixed tests', () => {
    assert.strictEqual(f(2, 1, 1), 20);
    assert.strictEqual(f(1, 2, 3), 46);
    assert.strictEqual(f(2, 2, 2), 54);
  });
});
