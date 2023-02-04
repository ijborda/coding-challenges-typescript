// GA-DE-RY-PO-LU-KI cypher

import { assert } from 'chai';

export function encode (str: string): string {
  const KEY = ['GA', 'DE', 'RY', 'PO', 'LU', 'KI'];

  return str.split('').map(char => {
    const isCharUpper = char === char.toUpperCase();
    const keyPairIndex = KEY.findIndex(keyPair => keyPair.includes(char.toUpperCase()));

    if (keyPairIndex !== -1) {
      const keyPair = KEY[keyPairIndex];
      const encodedChar = keyPair[0] === char.toUpperCase() ? keyPair[1] : keyPair[0];
      return isCharUpper ? encodedChar : encodedChar.toLowerCase();
    }

    return char;
  }).join('');
}

export function decode (str: string): string {
  return encode(str);
}

// Test
describe('Scouts are waiting!', function () {
  it('Basic Tests', function () {
    assert.strictEqual(encode('Ala has a cat'), 'Gug hgs g cgt');
    assert.strictEqual(decode('Gug hgs g cgt'), 'Ala has a cat');
    assert.strictEqual(encode('ABCD'), 'GBCE');
    assert.strictEqual(encode('gaderypoluki'), 'agedyropulik');
    assert.strictEqual(decode('agedyropulik'), 'gaderypoluki');
    assert.strictEqual(decode('GBCE'), 'ABCD');
  });
});
