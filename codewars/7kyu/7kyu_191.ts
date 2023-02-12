// Number of Rectangles in a Grid

import { assert } from 'chai';

export function numberOfRectangles (m: number, n: number): number {
  return (m + 1) * (n + 1) * m * n / 4;
}

// Test
describe('Number of Rectangles in a Grid', () => {
  it('Fixed tests', () => {
    assert.strictEqual(numberOfRectangles(4, 4), 100);
    assert.strictEqual(numberOfRectangles(5, 5), 225);
  });
});
