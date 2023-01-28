// Get the Middle Character

import { assert } from 'chai';

export function getMiddle (str: string): string {
  const strLen = str.length / 2;
  return Number.isInteger(strLen) ? `${str[strLen - 1]}${str[strLen]}` : str[Math.ceil(strLen) - 1];
}

function test (string:string, expected:string) {
  assert.strictEqual(getMiddle(string), expected);
}

describe('solution', function () {
  it('should handle basic tests', function () {
    test('test', 'es');
    test('testing', 't');
  });
});
