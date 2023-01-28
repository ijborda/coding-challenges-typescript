// Sum without highest and lowest number

import { assert } from 'chai';

export function sumArray (array:number[] | null) : number {
  if (!array || array.length <= 1) {
    return 0;
  }
  const sum = array.reduce((acc, a) => acc + a, 0);
  const min = Math.min(...array);
  const max = Math.max(...array);
  return sum - min - max;
}

describe('KataTest', function () {
  it('BasicTests', function () {
    assert.deepEqual(sumArray([6, 2, 1, 8, 10]), 16);
    assert.deepEqual(sumArray([6, 0, 1, 10, 10]), 17);
  });
});
