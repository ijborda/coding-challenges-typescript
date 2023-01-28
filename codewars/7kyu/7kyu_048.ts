// Sorted? yes? no? how?

import { assert } from 'chai';

export function isSortedAndHow (array:number[]): string {
  enum Response {
    DESCENDING = 'yes, descending',
    ASCENDING = 'yes, ascending',
    NO = 'no'
  }

  const original = JSON.stringify(array);

  array.sort((a, b) => b - a);
  const descending = JSON.stringify(array);

  array.sort((a, b) => a - b);
  const ascending = JSON.stringify(array);

  if (original === descending) {
    return Response.DESCENDING;
  } else if (original === ascending) {
    return Response.ASCENDING;
  } else {
    return Response.NO;
  }
}

describe('isSortedAndHow', function () {
  it('[1, 2]', function () {
    assert.strictEqual(isSortedAndHow([1, 2]), 'yes, ascending');
  });

  it('[15, 7, 3, -8]', function () {
    assert.strictEqual(isSortedAndHow([15, 7, 3, -8]), 'yes, descending');
  });

  it('[4, 2, 30]', function () {
    assert.strictEqual(isSortedAndHow([4, 2, 30]), 'no');
  });
});
