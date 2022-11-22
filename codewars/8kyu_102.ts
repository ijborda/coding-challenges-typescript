// To square(root) or not to square(root)

import { assert } from 'chai';

export function squareOrSquareRoot (array:number[]) : number[] {
  return array.map(a => Number.isInteger(Math.sqrt(a)) ? Math.sqrt(a) : Math.pow(a, 2));
}

describe('Solution', function () {
  it('basic tests 1', function () {
    const input: number[] = [4, 3, 9, 7, 2, 1];
    const expected: number[] = [2, 9, 3, 49, 4, 1];
    assert.deepEqual(squareOrSquareRoot(input.slice()), expected);
  });
  it('basic test 2', function () {
    const input: number[] = [100, 101, 5, 5, 1, 1];
    const expected: number[] = [10, 10201, 25, 25, 1, 1];
    assert.deepEqual(squareOrSquareRoot(input.slice()), expected);
  });

  it('basic test 3', function () {
    const input: number[] = [1, 2, 3, 4, 5, 6];
    const expected: number[] = [1, 4, 9, 2, 25, 36];
    assert.deepEqual(squareOrSquareRoot(input.slice()), expected);
  });
});
