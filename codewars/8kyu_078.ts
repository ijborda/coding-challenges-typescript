// Convert to Binary

import { assert } from 'chai';

export function toBinary (n:number):number {
  return +(n >>> 0).toString(2);
}

// Test
describe('Basic tests', () => {
  it('Testing for fixed tests', () => {
    assert.strictEqual(toBinary(1), 1);
    assert.strictEqual(toBinary(2), 10);
    assert.strictEqual(toBinary(3), 11);
    assert.strictEqual(toBinary(5), 101);
  });
});
