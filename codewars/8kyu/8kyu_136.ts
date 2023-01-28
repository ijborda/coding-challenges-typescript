// isReallyNaN

import { assert } from 'chai';

export function isReallyNaN (val: any): boolean {
  return Number.isNaN(val);
}

describe('Basic tests', function () {
  it('returns `false` for Int', function () {
    assert.strictEqual(isReallyNaN(37), false);
  });

  it('returns `false` for String', function () {
    assert.strictEqual(isReallyNaN('37'), false);
  });

  it('returns `true` for NaN', function () {
    assert.strictEqual(isReallyNaN(NaN), true);
  });

  it('returns `false` for undefined', function () {
    assert.strictEqual(isReallyNaN(undefined), false);
  });
});
