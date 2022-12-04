// Sort and Star

import { assert } from 'chai';

export function twoSort (s: string[]): string {
  return s.sort()[0].split('').join('***');
}

describe('Sort and Star', function () {
  it('Sample tests', function () {
    assert.equal(twoSort(['bitcoin', 'take', 'over', 'the', 'world', 'maybe', 'who', 'knows', 'perhaps']), 'b***i***t***c***o***i***n');
    assert.equal(twoSort(['turns', 'out', 'random', 'test', 'cases', 'are', 'easier', 'than', 'writing', 'out', 'basic', 'ones']), 'a***r***e');
    assert.equal(twoSort(['lets', 'talk', 'about', 'javascript', 'the', 'best', 'language']), 'a***b***o***u***t');
    assert.equal(twoSort(['i', 'want', 'to', 'travel', 'the', 'world', 'writing', 'code', 'one', 'day']), 'c***o***d***e');
    assert.equal(twoSort(['Lets', 'all', 'go', 'on', 'holiday', 'somewhere', 'very', 'cold']), 'L***e***t***s');
  });
});
