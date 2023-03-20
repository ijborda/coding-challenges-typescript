// Valid Braces

import { assert } from 'chai';

export function validBraces (braces: string): boolean {
  const regex = /(\(\)|\[\]|{})/;
  while (regex.test(braces)) {
    braces = braces.replace(regex, '');
  }
  return braces === '';
}

// Test
describe('solution', function () {
  it('should handle basic tests', function () {
    assert.strictEqual(validBraces('()'), true);
    assert.strictEqual(validBraces('[(])'), false);
  });
});
