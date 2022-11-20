// Find Multiples of a Number

import { assert } from 'chai';

export function findMultiples (integer: number, limit: number): number[] {
  const multiples = [];
  let currentMultiple = integer;

  while (currentMultiple <= limit) {
    multiples.push(currentMultiple);
    currentMultiple += integer;
  }

  return multiples;
}

describe('Basic tests', () => {
  it('Should pass basic tests', () => {
    assert.deepEqual(findMultiples(5, 25), [5, 10, 15, 20, 25]);
    assert.deepEqual(findMultiples(1, 2), [1, 2]);
    assert.deepEqual(findMultiples(5, 7), [5]);
    assert.deepEqual(findMultiples(4, 27), [4, 8, 12, 16, 20, 24]);
    assert.deepEqual(findMultiples(11, 54), [11, 22, 33, 44]);
  });
});
