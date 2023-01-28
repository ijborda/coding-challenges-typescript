// Hex to Decimal

import { assert } from 'chai';

export function hexToDec (hexString:string):number {
  return parseInt(hexString, 16);
}

describe('solution', function () {
  it('Basic Tests', function () {
    assert.equal(hexToDec('1'), 1);
    assert.equal(hexToDec('a'), 10);
    assert.equal(hexToDec('10'), 16);
    assert.equal(hexToDec('FF'), 255);
    assert.equal(hexToDec('-C'), -12);
  });
});
