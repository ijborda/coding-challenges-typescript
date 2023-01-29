// Digital cypher vol 2

import { assert } from 'chai';

export function decode (code:number[], n:number):string {
  const key = n.toString().split('').map(Number);
  const raw = code.map((a, i) => 96 + a - key[i % key.length]);
  return String.fromCharCode(...raw);
}

describe('Decoding..', function () {
  it('Basic Tests', function () {
    assert.equal(decode([20, 12, 18, 30, 21], 1939), 'scout');
    assert.equal(decode([14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8], 1939), 'masterpiece');
  });
});
