// Regexp Basics - is it a eight bit unsigned number?

import { assert } from 'chai';

declare global {
  interface String { // Declaration needed, don't remove it
    eightBitNumber(): boolean;
  }
}

/* eslint no-extend-native: ["error", { "exceptions": ["String"] }] */
String.prototype.eightBitNumber = function (): boolean {
  const int = parseInt(this.valueOf());
  return int.toString() === this.valueOf() && int >= 0 && int <= 255;
};

// Test
describe('Sample tests', () => {
  it('Basic tests', () => {
    assert.equal(''.eightBitNumber(), false);
    assert.equal('0'.eightBitNumber(), true);
    assert.equal('00'.eightBitNumber(), false);
    assert.equal('55'.eightBitNumber(), true);
    assert.equal('042'.eightBitNumber(), false);
    assert.equal('123'.eightBitNumber(), true);
    assert.equal('255'.eightBitNumber(), true);
    assert.equal('256'.eightBitNumber(), false);
    assert.equal('999'.eightBitNumber(), false);
  });
});
