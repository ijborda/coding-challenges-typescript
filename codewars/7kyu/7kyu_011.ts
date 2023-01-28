// Jaden Casing Strings

import { assert } from 'chai';

declare global {
  interface String { // Declaration needed, don't remove it
    toJadenCase(): string;
  }
}

/* eslint no-extend-native: ["error", { "exceptions": ["String"] }] */
String.prototype.toJadenCase = function () {
  const capitalize = (word: string): string => word[0].toUpperCase() + word.slice(1).toLowerCase();
  return this.split(' ').map(capitalize).join(' ');
};

describe('solution', function () {
  it('tests', function () {
    assert.equal("How can mirrors be real if our eyes aren't real".toJadenCase(),
      "How Can Mirrors Be Real If Our Eyes Aren't Real");
  });
});
