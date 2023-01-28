// Regexp Basics - is it a digit?

import { assert } from 'chai';

declare global {
  interface String { // Necessary, keep it here.
    digit(): boolean;
  }
}

/* eslint no-extend-native: ["error", { "exceptions": ["String"] }] */
String.prototype.digit = function (): boolean {
  return /^[0-9]$/.test(this.valueOf());
};

describe('hex number', () => {
  it('Basic tests', () => {
    assert.strictEqual(''.digit(), false);
    assert.strictEqual('7'.digit(), true);
    assert.strictEqual(' '.digit(), false);
    assert.strictEqual('a'.digit(), false);
    assert.strictEqual('a5'.digit(), false);
    assert.strictEqual('14'.digit(), false);
  });
});
