// Jumping Number (Special Numbers Series #4)

import { assert } from 'chai';

export function jumpingNumber (n: number) {
  enum Response {
    JUMPING = 'Jumping!!',
    NOT_JUMPING = 'Not!!'
  }

  const isJumping = n.toString().split('').every((a, i, arr) => {
    if (i === 0) {
      return true;
    }
    return Math.abs(Number(a) - Number(arr[i - 1])) === 1;
  });

  return isJumping ? Response.JUMPING : Response.NOT_JUMPING;
}

describe('Basic tests', () => {
  it('Testing for 1', () => assert.strictEqual(jumpingNumber(1), 'Jumping!!'));
  it('Testing for 7', () => assert.strictEqual(jumpingNumber(7), 'Jumping!!'));
  it('Testing for 9', () => assert.strictEqual(jumpingNumber(9), 'Jumping!!'));
  it('Testing for 23', () => assert.strictEqual(jumpingNumber(23), 'Jumping!!'));
  it('Testing for 32', () => assert.strictEqual(jumpingNumber(32), 'Jumping!!'));
  it('Testing for 79', () => assert.strictEqual(jumpingNumber(79), 'Not!!'));
  it('Testing for 98', () => assert.strictEqual(jumpingNumber(98), 'Jumping!!'));
  it('Testing for 8987', () => assert.strictEqual(jumpingNumber(8987), 'Jumping!!'));
  it('Testing for 4343456', () => assert.strictEqual(jumpingNumber(4343456), 'Jumping!!'));
  it('Testing for 98789876', () => assert.strictEqual(jumpingNumber(98789876), 'Jumping!!'));
});
