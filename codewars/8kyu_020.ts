// String repeat

import { assert } from 'chai';

function repeatStr (n: number, s: string): string {
  return s.repeat(n);
}

// Test
describe('solution', function () {
  it('Tests', function () {
    assert.equal(repeatStr(3, '*'), '***');
  });
});
