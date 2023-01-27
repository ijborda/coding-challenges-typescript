// Billiards triangle

import { assert } from 'chai';

export function areaLargestSquare (r: number): number {
  return r ** 2 * 2;
}

describe('Testing --- Area largest square --- ', () => {
  it('Basic tests', () => {
    assert.strictEqual(areaLargestSquare(5), 50);
    assert.strictEqual(areaLargestSquare(7), 98);
    assert.strictEqual(areaLargestSquare(15), 450);
  });
});
