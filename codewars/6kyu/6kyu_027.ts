// Build a pile of Cubes

import { assert } from 'chai';

export function findNb (m: number): number {
  let n = 1;
  let mCurrent = 1;
  while (true) {
    if (mCurrent === m) {
      return n;
    } else if (mCurrent > m) {
      return -1;
    } else {
      n += 1;
      mCurrent += Math.pow(n, 3);
    }
  }
}

// Test
describe('Fixed Tests nbMonths', function () {
  it('Basic tests', function () {
    assert.strictEqual(findNb(4183059834009), 2022);
    assert.strictEqual(findNb(24723578342962), -1);
    assert.strictEqual(findNb(135440716410000), 4824);
    assert.strictEqual(findNb(40539911473216), 3568);
  });
});
