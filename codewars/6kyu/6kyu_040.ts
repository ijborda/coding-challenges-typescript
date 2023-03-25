// Multiplication table

import { assert } from 'chai';

export function multiplicationTable (length: number): number[][] {
  return Array.from({ length })
    .map((_, i) => Array.from({ length })
      .map((_, j) => (i + 1) * (j + 1)));
}

// Test
describe('Example Tests', () => {
  it('should work work with example tests', () => {
    assert.deepStrictEqual(multiplicationTable(1), [[1]]);
    assert.deepStrictEqual(multiplicationTable(2), [[1, 2], [2, 4]]);
    assert.deepStrictEqual(multiplicationTable(3), [[1, 2, 3], [2, 4, 6], [3, 6, 9]]);
  });
});
