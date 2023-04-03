// String transformer

import { assert } from 'chai';

declare global {
  interface String {
    toggleCase(): string;
    reverseWords(): string;
  }
}

export function stringTransformer (str: string) {
  return str
    .toggleCase()
    .reverseWords();
}

/* eslint no-extend-native: ["error", { "exceptions": ["String"] }] */
String.prototype.toggleCase = function (): string {
  return this
    .split('')
    .map(c => c.toLowerCase() === c ? c.toUpperCase() : c.toLowerCase())
    .join('');
};

/* eslint no-extend-native: ["error", { "exceptions": ["String"] }] */
String.prototype.reverseWords = function (): string {
  return this
    .split(' ')
    .reverse()
    .join(' ');
};

// Test
describe('Fixed tests', function () {
  it("Testing for 'Example Input'", () => assert.strictEqual(stringTransformer('Example Input'), 'iNPUT eXAMPLE'));
  it("Testing for ''", () => assert.strictEqual(stringTransformer(''), ''));
  it("Testing for 'To be OR not to be That is the Question'", () => assert.strictEqual(stringTransformer('To be OR not to be That is the Question'), 'qUESTION THE IS tHAT BE TO NOT or BE tO'));
  it("Testing for 'You Know When  THAT  Hotline Bling'", () => assert.strictEqual(stringTransformer('You Know When  THAT  Hotline Bling'), 'bLING hOTLINE  that  wHEN kNOW yOU'));
  it("Testing for ' A b C d E f G '", () => assert.strictEqual(stringTransformer(' A b C d E f G '), ' g F e D c B a '));
});
