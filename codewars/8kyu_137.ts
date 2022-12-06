// FIXME: Replace all dots

import { assert } from 'chai';

export function replaceDots (str: string): string {
  return str.replace(/\./g, '-');
}

describe('FIXME: Replace all dots', () => {
  it('Fixed tests', () => {
    assert.strictEqual(replaceDots(''), '');
    assert.strictEqual(replaceDots('no dots'), 'no dots');
    assert.strictEqual(replaceDots('one.two.three'), 'one-two-three');
    assert.strictEqual(replaceDots('...'), '---');
  });
});
