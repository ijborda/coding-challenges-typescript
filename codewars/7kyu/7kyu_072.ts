// Simple Fun #152: Invite More Women?

import { assert } from 'chai';

export function inviteMoreWomen (guests: number[]): boolean {
  return guests.reduce((acc, a) => acc + a, 0) > 0;
}

describe('Basic Tests', function () {
  it('It should work for basic tests.', function () {
    assert.equal(inviteMoreWomen([1, -1, 1]), true);
    assert.equal(inviteMoreWomen([1, 1, 1]), true);
    assert.equal(inviteMoreWomen([-1, -1, -1]), false);
    assert.equal(inviteMoreWomen([1, -1]), false);
  });
});
