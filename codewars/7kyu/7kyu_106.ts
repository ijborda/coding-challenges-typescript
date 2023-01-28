// Compare Strings by Sum of Chars

import { assert } from 'chai';

export function compare (s1:string|null, s2:string|null):boolean {
  return sumWord(s1) === sumWord(s2);
}

const sumWord = (str: string|null): number => {
  if (!str || (str.match(/[^a-z]/ig) || []).length !== 0) {
    return 0;
  }
  return str.toUpperCase().split('').reduce((acc, a) => acc + a.charCodeAt(0), 0);
};

describe('solution', function () {
  it('basicTests', function () {
    assert.strictEqual(compare('AD', 'BC'), true);
    assert.strictEqual(compare('AD', 'DD'), false);
    assert.strictEqual(compare(null, 'DD'), false);
    assert.strictEqual(compare('DD0', 'DD'), false);
  });
});
