// Growth of a Population

import { assert } from 'chai';

export const nbYear = (p0:number, percent:number, aug:number, target:number): number => {
  let nYear = 0;
  let currentPop = p0;

  while (currentPop < target) {
    nYear += 1;
    currentPop = currentPop * (1 + percent / 100) + aug;
  }

  return nYear;
};

function testing (p0:number, percent:number, aug:number, p:number, expected:number) {
  assert.strictEqual(nbYear(p0, percent, aug, p), expected);
}

describe('Fixed Tests', function () {
  it('Basic tests nbYear', function () {
    testing(1500, 5, 100, 5000, 15);
    testing(1500000, 2.5, 10000, 2000000, 10);
    testing(1500000, 0.25, 1000, 2000000, 94);
    testing(1500000, 0.25, -1000, 2000000, 151);
  });
});
