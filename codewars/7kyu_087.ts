// Array Leaders (Array Series #3)

import { assert } from 'chai';

export function arrayLeaders (numbers: number[]): number[] {
  return numbers.filter((a, i, arr) => {
    const sliceParams = -1 * (arr.length - i - 1);
    if (sliceParams === 0) {
      return a > 0;
    }
    return a > arr.slice(sliceParams).reduce((acc, a) => acc + a, 0);
  });
}

describe('Basic Tests', function () {
  it('Testing for [1, 2, 3, 4, 0]', () => assert.deepEqual(arrayLeaders([1, 2, 3, 4, 0]), [4]));
  it('Testing for [16, 17, 4, 3, 5, 2]', () => assert.deepEqual(arrayLeaders([16, 17, 4, 3, 5, 2]), [17, 5, 2]));
  it('Testing for [-1, -29, -26, -2]', () => assert.deepEqual(arrayLeaders([-1, -29, -26, -2]), [-1]));
  it('Testing for [-36, -12, -27]', () => assert.deepEqual(arrayLeaders([-36, -12, -27]), [-36, -12]));
  it('Testing for [5, -2, 2]', () => assert.deepEqual(arrayLeaders([5, -2, 2]), [5, 2]));
  it('Testing for [0, -1, -29, 3, 2]', () => assert.deepEqual(arrayLeaders([0, -1, -29, 3, 2]), [0, -1, 3, 2]));
});
