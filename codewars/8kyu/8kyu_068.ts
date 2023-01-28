// Powers of 2

import { assert } from 'chai';

export function powersOfTwo (n:number):number[] {
  return Array.from({ length: n + 1 }, (_, i) => i).map(a => Math.pow(2, a));
}

// Test
describe('Basic Tests', function () {
  it('Testing for fixed tests', () => {
    assert.deepEqual(powersOfTwo(0), [1]);
    assert.deepEqual(powersOfTwo(1), [1, 2]);
    assert.deepEqual(powersOfTwo(4), [1, 2, 4, 8, 16]);
  });
});
