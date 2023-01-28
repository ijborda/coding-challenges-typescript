// A Needle in the Haystack

import { assert } from 'chai';

export function findNeedle (haystack: any[]):string {
  const index = haystack.indexOf('needle');
  return `found the needle at position ${index}`;
}

describe('findNeedle', () => {
  it('basic tests', () => {
    assert.strictEqual(findNeedle(['3', '123124234', null, 'needle', 'world', 'hay', 2, '3', true, false]), 'found the needle at position 3');
    assert.strictEqual(findNeedle(['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago']), 'found the needle at position 5');
    assert.strictEqual(findNeedle([1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 5, 4, 3, 4, 5, 6, 67, 5, 5, 3, 3, 4, 2, 34, 234, 23, 4, 234, 324, 324, 'needle', 1, 2, 3, 4, 5, 5, 6, 5, 4, 32, 3, 45, 54]), 'found the needle at position 30');
    assert.strictEqual(findNeedle(['needle', 1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 5, 4, 3, 4, 5, 6, 67, 5, 5, 3, 3, 4, 2, 34, 234, 23, 4, 234, 324, 324, 1, 2, 3, 4, 5, 5, 6, 5, 4, 32, 3, 45, 54]), 'found the needle at position 0');
    assert.strictEqual(findNeedle([1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 5, 4, 3, 4, 5, 6, 67, 5, 5, 3, 3, 4, 2, 34, 234, 23, 4, 234, 324, 324, 1, 2, 3, 4, 5, 5, 6, 5, 4, 32, 3, 45, 54, 'needle']), 'found the needle at position 43');
  });
});
