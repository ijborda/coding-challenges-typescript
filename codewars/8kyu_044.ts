// Count Odd Numbers below n

import { assert } from 'chai';

export function oddCount (n: number) {
  return Math.floor(n / 2);
}

// Test
describe('example', () => {
  it('test', () => {
    assert.equal(oddCount(7), 3);
  });
});
