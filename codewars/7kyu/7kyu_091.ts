// Digital cypher

import { assert } from 'chai';

export function encode (str:string, key:number): number[] {
  const keyString = key.toString();
  return str.split('').map((a, i) => letterToNum(a) + +keyString[i % keyString.length]);
}

const letterToNum = (str: string): number => {
  const BASE = 'a'.charCodeAt(0);
  return str.charCodeAt(0) - BASE + 1;
};

describe('Encoding..', function () {
  it('Basic Tests', function () {
    assert.equal(encode('scout', 1939).join(','), [20, 12, 18, 30, 21].join(','));
    assert.equal(encode('masterpiece', 1939).join(','), [14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8].join(','));
  });
});
