// Pyramid Array

import { assert } from 'chai';

export function pyramid (length: number) {
  return Array.from({ length }).map((_, i) => Array.from({ length: i + 1 }).fill(1));
}

// Test
describe('basic tests', () => {
  it('Testing for 0', () => assert.deepEqual(pyramid(0), []));
  it('Testing for 1', () => assert.deepEqual(pyramid(1), [[1]]));
  it('Testing for 2', () => assert.deepEqual(pyramid(2), [[1], [1, 1]]));
  it('Testing for 3', () => assert.deepEqual(pyramid(3), [[1], [1, 1], [1, 1, 1]]));
});
