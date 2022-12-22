// Remove duplicate words

import { assert } from 'chai';

export function removeDuplicateWords (s: string): string {
  return Array.from(new Set(s.split(' '))).join(' ');
}

describe('Sample Test Cases', function () {
  it('Should return a string', function () {
    assert.equal(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), 'alpha beta gamma delta');
  });
});
