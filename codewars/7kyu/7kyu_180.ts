// Functions of Integers on Cartesian Plane

import { assert } from 'chai';

export function sumin (n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      sum += Math.min(i, j);
    }
  }
  return sum;
}

export function sumax (n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      sum += Math.max(i, j);
    }
  }
  return sum;
}

export function sumsum (n: number): number {
  return sumin(n) + sumax(n);
}

// Test
describe('Fixed Tests sumin, sumax, sumsum', function () {
  it('Basic tests', function () {
    assert.equal(sumin(5), 55);
    assert.equal(sumax(8), 372);
    assert.equal(sumsum(8), 576);
  });
});
