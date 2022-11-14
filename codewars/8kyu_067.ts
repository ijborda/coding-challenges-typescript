// altERnaTIng cAsE <=> ALTerNAtiNG CaSe

import { assert } from 'chai';

export function toAlternatingCase (s: string): string {
  return s.split('').map((a) => a === a.toLowerCase() ? a.toUpperCase() : a.toLowerCase()).join('');
}

// Test
describe('Sample Test Cases', function () {
  it('Should return a revesed case value', function () {
    assert.equal(toAlternatingCase('hello world'), 'HELLO WORLD');
    assert.equal(toAlternatingCase('HeLLo WoRLD'), 'hEllO wOrld');
    assert.equal(toAlternatingCase('1a2b3c4d5e'), '1A2B3C4D5E');
  });
});
