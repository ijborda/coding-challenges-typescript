// What's the real floor?

import { assert } from 'chai';

export function getRealFloor (n: number): number {
  if (n <= 0) {
    return n;
  }
  return n - (n < 13 ? 1 : 2);
}

// Test
describe('example', function () {
  it('test', function () {
    assert.equal(getRealFloor(1), 0);
    assert.equal(getRealFloor(5), 4);
    assert.equal(getRealFloor(15), 13);
    assert.equal(getRealFloor(0), 0);
    assert.equal(getRealFloor(-1), -1);
  });
});
