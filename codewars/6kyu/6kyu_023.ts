// Find the unique number

import { assert } from 'chai';

export function findMissingLetter (array:string[]):string {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

  const isUpper = array[0] === array[0].toUpperCase();
  const start = [...ALPHABET].findIndex(a => a === array[0].toLowerCase());
  const trunc_alph = [...ALPHABET].slice(start);
  const missing = trunc_alph.find((a, i) => a !== array[i].toLowerCase());

  if (!missing) {
    throw new Error('No missing letter');
  }
  return isUpper ? missing.toUpperCase() : missing;
}

// Test
describe('solution', function () {
  it('exampleTests', function () {
    assert.equal(findMissingLetter(['a', 'b', 'c', 'd', 'f']), 'e');
    assert.equal(findMissingLetter(['O', 'Q', 'R', 'S']), 'P');
    assert.equal(findMissingLetter(['q', 'r', 's', 't', 'u', 'v', 'x']), 'w');
  });
});
