// Is it even?

import { assert } from 'chai';

export const boolToWord = (bool: boolean): string => {
  enum Response {
    TRUE = 'Yes',
    FALSE = 'No'
  }
  return bool ? Response.TRUE : Response.FALSE;
};

describe('boolToWord', function () {
  it('Sample tests', function () {
    assert.equal(boolToWord(true), 'Yes');
    assert.equal(boolToWord(false), 'No');
  });
});
