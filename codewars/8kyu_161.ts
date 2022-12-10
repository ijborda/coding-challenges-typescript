// BASIC: Making Six Toast.

import { assert } from 'chai';

export function main (verb: string, noun: string): string {
  return `${verb}${noun}`;
}

describe('Basic tests', () => {
  it('Should pass basic tests', () => {
    assert.equal(main('take ', 'item'), 'take item');
    assert.equal(main('use ', 'sword'), 'use sword');
  });
});
