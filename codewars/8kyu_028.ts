// Remove First and Last Character

import { assert } from 'chai';

export function removeChar (str: string): string {
  const strArr = str.split('');
  strArr.pop();
  strArr.shift();
  return strArr.join('');
}

// Test
describe('removeChar', () => {
  it('basic tests', () => {
    assert.equal(removeChar('eloquent'), 'loquen');
    assert.equal(removeChar('country'), 'ountr');
    assert.equal(removeChar('person'), 'erso');
    assert.equal(removeChar('place'), 'lac');
  });
});
