// Adding values of arrays in a shifted way

import { assert } from 'chai';

export function addingShifted (arrayOfArrays:number[][], shift:number): number[] {
  const length = arrayOfArrays[0].length;
  return arrayOfArrays
    .map((a, i) => [...Array.from({ length: i * shift }), ...a] as number[])
    .reduce((acc, a) => a.map((a, i) => (a || 0) + (acc[i] || 0), Array.from({ length }).fill(0) as number[]));
}

// Test
describe('Kata Tests', function () {
  it('Basic Test 1', function () {
    const arrayOfArrays = [[1, 2, 3, 4, 5, 6], [7, 7, 7, 7, 7, -7]];
    const expected = [8, 9, 10, 11, 12, -1];
    const result = addingShifted(arrayOfArrays, 0);
    assert.deepEqual(result, expected);
  });
  it('Basic Test 2', function () {
    const arrayOfArrays = [[1, 2, 3, 4, 5, 6], [7, 7, 7, 7, 7, 7]];
    const expected = [1, 2, 3, 11, 12, 13, 7, 7, 7];
    const result = addingShifted(arrayOfArrays, 3);
    assert.deepEqual(result, expected);
  });
  it('Basic Test 3', function () {
    const arrayOfArrays = [[1, 2, 3, 4, 5, 6], [7, 7, 7, -7, 7, 7], [1, 1, 1, 1, 1, 1]];
    const expected = [1, 2, 3, 11, 12, 13, -6, 8, 8, 1, 1, 1];
    const result = addingShifted(arrayOfArrays, 3);
    assert.deepEqual(result, expected);
  });
});
