// CSV representation of array

import { assert } from 'chai';

export function toCsvText (array:number[][]):string {
  return array.map(a => a.join(',')).join('\n');
}

// Test
describe('Testing...', () => {
  it('Basic Tests', () => {
    assert.equal(toCsvText([
      [0, 1, 2, 3, 45],
      [10, 11, 12, 13, 14],
      [20, 21, 22, 23, 24],
      [30, 31, 32, 33, 34]
    ]), '0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34');

    assert.equal(toCsvText([
      [-25, 21, 2, -33, 48],
      [30, 31, -32, 33, -34]
    ]), '-25,21,2,-33,48\n30,31,-32,33,-34');

    assert.equal(toCsvText([
      [5, 55, 5, 5, 55],
      [6, 6, 66, 23, 24],
      [666, 31, 66, 33, 7]
    ]), '5,55,5,5,55\n6,6,66,23,24\n666,31,66,33,7');
  });
});
