// If you can't sleep, just count sheep!!

import { assert } from 'chai';

export function countSheep (num: number): string {
  return Array.from({ length: num }, (_, i) => `${i + 1} sheep...`).join('');
}

describe('Sample Test Cases', function () {
  it('Should return a string', function () {
    assert.equal(countSheep(0), '');
    assert.equal(countSheep(1), '1 sheep...');
    assert.equal(countSheep(2), '1 sheep...2 sheep...');
    assert.equal(countSheep(3), '1 sheep...2 sheep...3 sheep...');
  });
});
