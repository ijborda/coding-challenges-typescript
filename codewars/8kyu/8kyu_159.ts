// BASIC: Making Six Toast.

import { assert } from 'chai';

export function sixToast (num:number):number {
  return Math.abs(6 - num);
}

describe('solution', function () {
  it('Basic Tests', function () {
    assert.equal(sixToast(15), 9);
    assert.equal(sixToast(6), 0);
    assert.equal(sixToast(3), 3);
  });
});
