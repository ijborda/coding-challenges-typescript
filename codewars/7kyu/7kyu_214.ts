// Regexp Basics - is it a six bit unsigned number?

import { assert } from 'chai';

declare global {
  interface String { // Declaration needed, don't remove it
    sixBitNumber(): boolean;
  }
}

/* eslint no-extend-native: ["error", { "exceptions": ["String"] }] */
String.prototype.sixBitNumber = function (): boolean {
  const num = parseInt(this.valueOf());
  return num.toString() === this.valueOf() && num >= 0 && num <= 63;
};

// Test
describe('Fixed tests', () => {
  it('Basic tests', () => {
    assert.equal(''.sixBitNumber(), false);
    assert.equal('0'.sixBitNumber(), true);
    assert.equal('00'.sixBitNumber(), false);
    assert.equal('55'.sixBitNumber(), true);
    assert.equal('63'.sixBitNumber(), true);
    assert.equal('64'.sixBitNumber(), false);
    assert.equal('-0'.sixBitNumber(), false);
    assert.equal('-5'.sixBitNumber(), false);
    assert.equal('05'.sixBitNumber(), false);
    assert.equal('5'.sixBitNumber(), true);
  });
});
