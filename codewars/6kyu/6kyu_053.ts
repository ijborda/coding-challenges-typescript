// Buying a car

import chai, { assert } from 'chai';

export function nbMonths (oldCar: number, newCar: number, savingperMonth: number, percentLossByMonth: number): number[] {
  const ADDTNL_BIMONTHLY_PERCENT_LOSS = 0.005;
  const baseValuation = 1 - (percentLossByMonth / 100);

  let month = 0;
  let valuation = 1;

  while (true) {
    const asset = (oldCar * valuation) + (savingperMonth * month);
    const goal = newCar * valuation;
    const extra = asset - goal;

    if (extra > 0) {
      return [month, Math.round(extra)];
    }

    month++;
    if (month === 1) {
      valuation = baseValuation;
    } else {
      valuation *= (baseValuation - (ADDTNL_BIMONTHLY_PERCENT_LOSS * Math.floor(month / 2)));
    }
  }
}

// Test
chai.config.truncateThreshold = 0;

function testing (startPriceOld: number, startPriceNew: number, savingperMonth: number, percentLossByMonth: number, expected: number[]) {
  assert.deepEqual(nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth), expected);
}

describe('Fixed Tests nbMonths', function () {
  it('Basic tests', function () {
    testing(2000, 8000, 1000, 1.5, [6, 766]);
    testing(12000, 8000, 1000, 1.5, [0, 4000]);
  });
});
