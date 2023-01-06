// Balanced Number (Special Numbers Series #1)

import { assert } from 'chai';

export function balancedNum (number: number): string {
  enum Response {
    BALANCED = 'Balanced',
    NOT_BALANCED = 'Not Balanced'
  }

  const len = number.toString().length;
  let middleDown: number;
  let middleUp: number;

  if (len % 2) {
    middleDown = Math.floor(len / 2);
    middleUp = middleDown;
  } else {
    middleDown = (len / 2) - 1;
    middleUp = middleDown + 1;
  }

  const sums = number.toString().split('').reduce((acc, a, i) => {
    if (i < middleDown) {
      acc[0] += +a;
    } else if (i > middleUp) {
      acc[1] += +a;
    } else {
      // Do nothing
    }
    return acc;
  }, [0, 0] as number[]);
  const isBalanced = sums[0] === sums[1];

  return isBalanced ? Response.BALANCED : Response.NOT_BALANCED;
}

describe('Fixed tests', function () {
  it('Testing for 7', () => assert.strictEqual(balancedNum(7), 'Balanced'));
  it('Testing for 959', () => assert.strictEqual(balancedNum(959), 'Balanced'));
  it('Testing for 13', () => assert.strictEqual(balancedNum(13), 'Balanced'));
  it('Testing for 432', () => assert.strictEqual(balancedNum(432), 'Not Balanced'));
  it('Testing for 424', () => assert.strictEqual(balancedNum(424), 'Balanced'));
  it('Testing for 1024', () => assert.strictEqual(balancedNum(1024), 'Not Balanced'));
  it('Testing for 66545', () => assert.strictEqual(balancedNum(66545), 'Not Balanced'));
  it('Testing for 295591', () => assert.strictEqual(balancedNum(295591), 'Not Balanced'));
  it('Testing for 1230987', () => assert.strictEqual(balancedNum(1230987), 'Not Balanced'));
  it('Testing for 56239814', () => assert.strictEqual(balancedNum(56239814), 'Balanced'));
});
