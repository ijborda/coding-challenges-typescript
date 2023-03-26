// Backspaces in string

import { assert } from 'chai';

export function cleanString (s: string): string {
  while (s.includes('#')) {
    s = s.replace(/([^#]*#+)/i, a => {
      const sharpCount = (a.match(/#/g) || []).length;
      return a.slice(0, a.length - (sharpCount * 2));
    });
  }
  return s;
}

// Test
describe('example', function () {
  it('test', function () {
    assert.equal(cleanString('####d##c#'), '');
    assert.equal(cleanString('abc#d##c'), 'ac');
    assert.equal(cleanString('abc####d##c#'), '');
    assert.equal(cleanString('Y0##e7o'), 'e7o');
  });
});
