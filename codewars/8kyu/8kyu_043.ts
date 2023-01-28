// You only need one - Beginner

import { assert } from 'chai';

export const check = (a: (number | string)[], x: number | string): boolean => {
  return a.includes(x);
};

// Test
describe('example', function () {
  it('test', function () {
    assert.strictEqual(check([66, 101], 66), true);
    assert.strictEqual(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
    assert.strictEqual(check(['t', 'e', 's', 't'], 'e'), true);
    assert.strictEqual(check(['what', 'a', 'great', 'kata'], 'kat'), false);
  });
});
