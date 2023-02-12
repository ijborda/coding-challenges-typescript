// Unflatten a list (Easy)

import { assert } from 'chai';
import * as chai from 'chai';

export function unflatten (flatArray: any[]): any[] {
  const unflatArray: any[][] = [];
  const maxIter = flatArray.length;

  for (let i = 0; i < maxIter; i++) {
    if (flatArray[0] <= 2) {
      unflatArray.push(flatArray.splice(0, 1)[0]);
    } else {
      unflatArray.push(flatArray.splice(0, flatArray[0]));
    }
    if (flatArray.length === 0) {
      break;
    }
  }

  return unflatArray;
}

// Test
chai.config.truncateThreshold = 0;

describe('solution', function () {
  // it('Basic Tests 1', function () {
  //   const input = [3, 5, 2, 1];
  //   const expected = [[3, 5, 2], 1];

  //   assert.deepEqual(unflatten(input), expected);
  // });
  it('Basic Tests 2', function () {
    const input = [1, 4, 5, 2, 1, 2, 4, 5, 2, 6, 2, 3, 3];
    const expected = [1, [4, 5, 2, 1], 2, [4, 5, 2, 6], 2, [3, 3]];

    assert.deepEqual(unflatten(input), expected);
  });
});
