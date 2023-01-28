// Find the position!

import { assert } from 'chai';

export function position (alphabet:string):string {
  const position = alphabet.toLowerCase().charCodeAt(0) - 96;
  return `Position of alphabet: ${position}`;
}

describe('solution', function () {
  it('Basic tests', function () {
    assert.strictEqual(position('a'), 'Position of alphabet: 1');
    assert.strictEqual(position('z'), 'Position of alphabet: 26');
    assert.strictEqual(position('e'), 'Position of alphabet: 5');
  });
});
