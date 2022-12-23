// Sum of angles

import { assert } from 'chai';

export function angle (n: number): number {
  return 180 * (n - 2);
}

describe('basic tests', () => {
  it('angle(3)', () => assert.strictEqual(angle(3), 180));
  it('angle(4)', () => assert.strictEqual(angle(4), 360));
});
