// Hex Hash Sum

import { assert } from 'chai';

export function hexHash (code: string): number {
  return code
    .split('')
    .map(a => a.charCodeAt(0).toString(16))
    .join('')
    .split('')
    .map(Number)
    .reduce((acc, a) => Number.isNaN(a) ? acc : acc + a, 0);
}

// Test
describe('Basic tests', function () {
  it('Yo', function () {
    assert.equal(hexHash('Yo'), 20);
  });
  it('Hello, World!', function () {
    assert.equal(hexHash('Hello, World!'), 91);
  });
  it('Forty4Three', function () {
    assert.equal(hexHash('Forty4Three'), 113);
  });
});
