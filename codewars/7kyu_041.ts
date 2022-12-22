// The Coupon Code

import { assert } from 'chai';

export function checkCoupon (enteredCode: string, correctCode: string, currentDate: string, expirationDate: string): boolean {
  const today = new Date(currentDate);
  const expiry = new Date(expirationDate);
  return enteredCode === correctCode && today <= expiry;
}

describe('solution', function () {
  it('Basic tests', function () {
    assert.equal(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014'), true);
    assert.equal(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014'), false);
  });
});
