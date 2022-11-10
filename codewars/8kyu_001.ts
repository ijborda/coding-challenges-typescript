// Parse nice int from char problem

import { strict as assert } from 'assert';

function get_age (age: string): number {
  return +age[0];
}

// Test
describe('Test', () => {
  it('should past all tests', function () {
    assert.equal(get_age('2 years old'), 2);
    assert.equal(get_age('4 years old'), 4);
    assert.equal(get_age('5 years old'), 5);
    assert.equal(get_age('7 years old'), 7);
  });
});
