// Maximum Multiple

import { assert } from 'chai';

export function maxMultiple (divisor: number, bound: number): number {
  return Math.floor(bound / divisor) * divisor;
}

describe('Fixed tests', () => {
  it('maxMultiple(2, 7)', () => assert.strictEqual(maxMultiple(2, 7), 6));
  it('maxMultiple(3, 10)', () => assert.strictEqual(maxMultiple(3, 10), 9));
  it('maxMultiple(7, 17)', () => assert.strictEqual(maxMultiple(7, 17), 14));
  it('maxMultiple(10, 50)', () => assert.strictEqual(maxMultiple(10, 50), 50));
  it('maxMultiple(37, 200)', () => assert.strictEqual(maxMultiple(37, 200), 185));
  it('maxMultiple(7, 100)', () => assert.strictEqual(maxMultiple(7, 100), 98));
});
