// Printing Array elements with Comma delimiters

import { assert } from 'chai';

export function arr2bin (arr: Array<any>): string | typeof NaN {
  const sum = arr.reduce((acc, a) => isNumber(a) ? acc + a : acc, 0);
  const sumBinary = sum.toString(2);
  return sumBinary;
}

function isNumber (a: any): boolean {
  return typeof a === 'number';
}

describe('Array 2 Bin', function () {
  it('Basic tests', function () {
    assert.strictEqual(arr2bin([1, 2]), '11');
    assert.strictEqual(arr2bin([1, 2, 3, 4, 5]), '1111');
    assert.strictEqual(arr2bin([1, 10, 100, 1000]), '10001010111');
    assert.strictEqual(arr2bin([null]), '0');
    assert.strictEqual(arr2bin([true, true, false, 15]), '1111');
    assert.strictEqual(arr2bin([NaN]), 'NaN');
    assert.strictEqual(arr2bin([1, NaN]), 'NaN');
  });
});
