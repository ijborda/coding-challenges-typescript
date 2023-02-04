// Printing Array elements with Comma delimiters

import { assert } from 'chai';

export function printArray (array: any[]) : string {
  return array.join(',');
}

describe('printArray([2,4,5,2])', function () {
  // anything exported from the solution has automatically been imported for you already as "solution"

  it("Should return something that isn't falsy", function () {
    assert.equal(!!printArray([2, 4, 5, 2]), true, 'Expected function to return a value');
  });

  it("Should return '2,4,5,2'", function () {
    assert.deepEqual(printArray([2, 4, 5, 2]), '2,4,5,2');
  });

  it("Should return '2,4,5,2'", function () {
    assert.deepEqual(printArray(['2', '4', '5', '2']), '2,4,5,2');
  });

  it("Should return '2,4,5,2'", function () {
    assert.deepEqual(printArray([2, '4', 5, '2']), '2,4,5,2');
  });
});
