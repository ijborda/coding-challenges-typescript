// Training JS #29: methods of arrayObject---concat() and join()

import { assert } from 'chai';

export function bigToSmall (arr: number[][]): string {
  return arr.flat().sort((a, b) => b - a).join('>');
}

describe('-------- Basic Test --------', function () {
  it('bigToSmall([[1,2],[3,4],[5,6]])', function () {
    assert.strictEqual(bigToSmall([[1, 2], [3, 4], [5, 6]]), '6>5>4>3>2>1');
  });

  it('bigToSmall([[1,3,5],[2,4,6]])', function () {
    assert.strictEqual(bigToSmall([[1, 3, 5], [2, 4, 6]]), '6>5>4>3>2>1');
  });

  it('bigToSmall([[1,1],[1],[1,1]])', function () {
    assert.strictEqual(bigToSmall([[1, 1], [1], [1, 1]]), '1>1>1>1>1');
  });
});
