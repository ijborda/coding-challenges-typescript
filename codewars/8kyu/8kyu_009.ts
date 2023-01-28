// Sum of Triangular Numbers

import { strict as assert } from 'assert';

function sumTriangularNumbers (n:number):any {
  if (n < 0) {
    return 0;
  }
  return Array.from(new Array(n), (_, i) => i + 1).reduce((acc, a, i) => acc + (a * (n - i)), 0);
}

// Test
describe('solution', function () {
  it('BasicTests', function () {
    assert.equal(sumTriangularNumbers(6), 56);
    assert.equal(sumTriangularNumbers(34), 7140);
    assert.equal(sumTriangularNumbers(-291), 0);
    assert.equal(sumTriangularNumbers(943), 140205240);
    assert.equal(sumTriangularNumbers(-971), 0);
  });
});
