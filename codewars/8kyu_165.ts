// The falling speed of petals

import { assert } from 'chai';

export function parseF (s:string): number|null {
  const parsed = parseFloat(s);

  if (!parsed && parsed !== 0) {
    return null;
  }

  return parsed;
}

describe('Parse float', function () {
  it('Fixed tests', function () {
    assert.equal(parseF('1'), 1.0);
    assert.equal(parseF('true'), null);
  });
});
