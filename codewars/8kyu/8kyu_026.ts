// Simple multiplication

import { assert } from 'chai';

export function simpleMultiplication (num: number): number {
  return num * (num % 2 ? 9 : 8);
}

// Test
describe('Simple multiplication', () => {
  it('Fixed test', () => {
    assert.strictEqual(simpleMultiplication(2), 16, 'Should return double given argument..');
    assert.strictEqual(simpleMultiplication(1), 9, 'Should return double given argument..');
    assert.strictEqual(simpleMultiplication(8), 64, 'Should return given argument times eight...');
    assert.strictEqual(simpleMultiplication(4), 32, 'Should return given argument times eight...');
    assert.strictEqual(simpleMultiplication(5), 45, 'Should return given argument times nine...');
  });
});
