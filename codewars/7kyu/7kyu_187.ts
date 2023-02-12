// New £5 notes collectors!

import { assert } from 'chai';

export function getNewNotes (salary:number, bills:number[]):number {
  const totalBills = bills.reduce((acc, a) => acc + a, 0);
  const rem = Math.max(0, salary - totalBills);
  return Math.floor(rem / 5);
}

// Test
describe('solution', function () {
  it('BasicTests', function () {
    assert.equal(getNewNotes(2000, [500, 160, 400]), 188);
    assert.equal(getNewNotes(1260, [500, 50, 100]), 122);
    assert.equal(getNewNotes(3600, [1800, 350, 460, 500, 15]), 95);
    assert.equal(getNewNotes(1995, [1500, 19, 44]), 86);
  });
});
