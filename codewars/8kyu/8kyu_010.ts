// Convert a String to a Number!

import { strict as assert } from 'assert';

function stringToNumber (str: string): number {
  return Number(str);
}

// Test
describe('stringToNumber', function () {
  it('should work for the examples', function () {
    assert.strictEqual(stringToNumber('1234'), 1234);
    assert.strictEqual(stringToNumber('605'), 605);
    assert.strictEqual(stringToNumber('1405'), 1405);
    assert.strictEqual(stringToNumber('-7'), -7);
  });
});
