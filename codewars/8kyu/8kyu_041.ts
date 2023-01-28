// You Can't Code Under Pressure #1

import { assert } from 'chai';

export function doubleInteger (i: number): number {
  return i * 2;
}

// Test
describe('Double integer', () => {
  it('Fixed tests', () => {
    assert.strictEqual(doubleInteger(2), 4);
  });
});
