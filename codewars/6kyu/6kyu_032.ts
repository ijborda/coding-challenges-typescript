// Bouncing Balls

import { assert } from 'chai';

export function bouncingBall (height: number, bounce: number, window: number): number {
  const isHeightValid = height > 0;
  const isBounceValid = bounce > 0 && bounce < 1;
  const isWindowValid = window < height;

  if (!isHeightValid || !isBounceValid || !isWindowValid) {
    return -1;
  }

  return Math.ceil(Math.log((window / height)) / Math.log(bounce)) * 2 - 1;
}

// Test
describe('Fixed Tests sumFracts', function () {
  it('Basic tests', function () {
    assert.strictEqual(bouncingBall(3.0, 0.66, 1.5), 3);
    assert.strictEqual(bouncingBall(30.0, 0.66, 1.5), 15);
    assert.strictEqual(bouncingBall(30, 0.75, 1.5), 21);
    assert.strictEqual(bouncingBall(30, 0.4, 10), 3);
  });
});
