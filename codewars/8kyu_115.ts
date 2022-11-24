// Convert a string to an array

import { assert } from 'chai';

export function stringToArray (s: string): string[] {
  return s.split(' ');
}

describe('stringToArray', () => {
  it('example 1', () => {
    assert.deepEqual(stringToArray('Robin Singh'), ['Robin', 'Singh']);
  });

  it('example 2', () => {
    assert.deepEqual(stringToArray('I love arrays they are my favorite'), ['I', 'love', 'arrays', 'they', 'are', 'my', 'favorite']);
  });
});
