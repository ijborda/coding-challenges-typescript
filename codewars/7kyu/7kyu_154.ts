// Find the Squares

import { assert } from 'chai';

export const findSquares = (num:number):string => {
  const baseRoot = (num - 1) / 2;
  const low = Math.pow(baseRoot + 1, 2);
  const high = Math.pow(baseRoot, 2);
  return `${low}-${high}`;
};

describe('Solution', function () {
  it('should work for small numbers', function () {
    assert.strictEqual(findSquares(9), '25-16');
    assert.strictEqual(findSquares(5), '9-4');
  });
});

describe('Solution', function () {
  it('should work for bigger numbers', function () {
    assert.strictEqual(findSquares(81), '1681-1600');
    assert.strictEqual(findSquares(25), '169-144');
  });
});
