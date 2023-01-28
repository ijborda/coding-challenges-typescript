// Opposites Attract

import { assert } from 'chai';

export function lovefunc (flower1: number, flower2: number): boolean {
  return (flower1 + flower2) % 2 !== 0;
}

// Test
describe('Do we love each other?', function () {
  it('Basic tests', function () {
    assert.isTrue(lovefunc(1, 4));
    assert.isFalse(lovefunc(2, 2));
    assert.isTrue(lovefunc(0, 1));
    assert.isFalse(lovefunc(0, 0));
  });
});
