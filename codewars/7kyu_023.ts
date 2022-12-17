// String ends with?

import { assert } from 'chai';

export function solution (str: string, ending: string): boolean {
  return str.endsWith(ending);
}

describe('Sample Test Cases', function () {
  it('Should return true or false', function () {
    assert.equal(solution('abcde', 'cde'), true);
    assert.equal(solution('abcde', 'abc'), false);
    assert.equal(solution('abc', ''), true);
  });
});
