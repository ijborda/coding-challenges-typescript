// Say "Hello World" JS Style

import { assert } from 'chai';

export const say = (string1: string) => {
  return (string2: string) => `${string1} ${string2}`;
};

// Test
describe('solution', function () {
  it('should work for basic tests', () => {
    assert.equal(say('Hello')('World'), 'Hello World');
  });
});
