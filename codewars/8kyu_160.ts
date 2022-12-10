// BASIC: Making Six Toast.

import { assert } from 'chai';

export const a = 'dev';
export const b = 'Lab';
export const name: string = a + b;

describe('variable assignment', function () {
  it('should set variable a', function () {
    assert.strictEqual(a, 'dev');
  });
  it('should set variable b', function () {
    assert.strictEqual(b, 'Lab');
  });
  it('should set variable name', function () {
    assert.strictEqual(name, 'devLab');
  });
});
