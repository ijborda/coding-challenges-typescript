// Basic Mathematical Operations

import { assert } from 'chai';

export function basicOp (operation: string, a: number, b: number): number {
  switch (operation) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return a / b;
    default: return 0;
  }
}

// Test
describe('basicOp', () => {
  it('basic tests', () => {
    assert.strictEqual(basicOp('+', 4, 7), 11);
    assert.strictEqual(basicOp('-', 15, 18), -3);
    assert.strictEqual(basicOp('*', 5, 5), 25);
    assert.strictEqual(basicOp('/', 49, 7), 7);
  });
});
