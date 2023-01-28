// Shortest Word

import { assert } from 'chai';

export function findShort (s: string): number {
  return Math.min(...s.split(' ').map(a => a.length));
}

describe('Sample Test Cases', function () {
  it('Should return the length of the shortest word(s)', function () {
    assert.equal(findShort('bitcoin take over the world maybe who knows perhaps'), 3);
    assert.equal(findShort('turns out random test cases are easier than writing out basic ones'), 3);
    assert.equal(findShort('lets talk about javascript the best language'), 3);
    assert.equal(findShort('i want to travel the world writing code one day'), 1);
    assert.equal(findShort('Lets all go on holiday somewhere very cold'), 2);
    assert.equal(findShort("Let's travel abroad shall we"), 2);
  });
});
