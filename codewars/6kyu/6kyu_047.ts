// Fold an array

import { assert } from 'chai';

export function foldArray (array:number[], runs:number):number[] {
  let arr = array.slice();
  for (let i = 0; i < runs; i++) {
    const foldedArrLen = Math.ceil(arr.length / 2);
    const foldedArr = [];
    for (let j = 0; j < foldedArrLen; j++) {
      const oppositeIndex = arr.length - 1 - j;
      foldedArr.push(arr[j] + (oppositeIndex < foldedArrLen ? 0 : arr[oppositeIndex]));
    }
    arr = foldedArr;
  }
  return arr;
}

// Test
describe('solution', function () {
  it('basic tests', function () {
    let input = [1, 2, 3, 4, 5];
    let expected = [6, 6, 3];
    assert.deepEqual(foldArray(input, 1), expected);

    expected = [9, 6];
    assert.deepEqual(foldArray(input, 2), expected);

    expected = [15];
    assert.deepEqual(foldArray(input, 3), expected);

    input = [-9, 9, -8, 8, 66, 23];
    expected = [14, 75, 0];
    assert.deepEqual(foldArray(input, 1), expected);
  });
});
