// Count the Monkeys!

import { assert } from 'chai';

export function monkeyCount (n: number) {
  return Array.from(new Array(n), (_, i) => i + 1);
}

// Test
describe('Fixed tests', () => {
  it('Testing for 5', () => {
    assert.deepEqual(monkeyCount(5), [1, 2, 3, 4, 5]);
  });
  it('Testing for 3', () => {
    assert.deepEqual(monkeyCount(3), [1, 2, 3]);
  });
  it('Testing for 9', () => {
    assert.deepEqual(monkeyCount(9), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it('Testing for 10', () => {
    assert.deepEqual(monkeyCount(10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  it('Testing for 20', () => {
    assert.deepEqual(monkeyCount(20), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  });
});
