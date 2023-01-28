// Grasshopper - Check for factor

import { assert } from 'chai';

export function checkForFactor (base: number, factor: number) {
  return base % factor === 0;
}

const tester = (base: number, factor: number, exp: boolean) => it(`checkForFactor(${base}, ${factor})`, () => assert.strictEqual(checkForFactor(base, factor), exp));

describe('Basic tests', function () {
  tester(10, 2, true);
  tester(63, 7, true);
  tester(2450, 5, true);
  tester(24612, 3, true);
  tester(9, 2, false);
  tester(653, 7, false);
  tester(2453, 5, false);
  tester(24617, 3, false);
});
