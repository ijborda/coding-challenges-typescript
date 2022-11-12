// Get the mean of an array

import { assert } from 'chai';

export function getAverage (marks:number[]):number {
  return Math.floor(marks.reduce((acc, a) => acc + a, 0) / marks.length);
}

// Test
describe('solution', function () {
  it('Basic Tests', function () {
    assert.equal(getAverage([2, 2, 2, 2]), 2);
    assert.equal(getAverage([1, 2, 3, 4, 5]), 3);
    assert.equal(getAverage([1, 1, 1, 1, 1, 1, 1, 2]), 1);
  });
});
