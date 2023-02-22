// Wealth equality, finally!

import { assert } from 'chai';
import * as chai from 'chai';

export function redistributeWealth (wealth: number[]):void {
  const equalWealth = wealth.reduce((acc, a) => acc + a, 0) / wealth.length;
  wealth.fill(equalWealth);
}

// Test
chai.config.truncateThreshold = 0;
describe('Example test cases', function () {
  it('Simple tests', function () {
    const wealthEqual = [5, 5, 5, 5, 5]; // already equal
    redistributeWealth(wealthEqual);
    assert.deepEqual(wealthEqual, [5, 5, 5, 5, 5]);

    const wealthUnequal = [0, 10]; // unequal
    redistributeWealth(wealthUnequal);
    assert.deepEqual(wealthUnequal, [5, 5]);

    const wealthSingle = [5]; // single citizen
    redistributeWealth(wealthSingle);
    assert.deepEqual(wealthSingle, [5]);

    const wealthFloat = [3, 2, 2]; // floating point result
    redistributeWealth(wealthFloat);
    assert.deepEqual(wealthFloat, [2.3333333333333335, 2.3333333333333335, 2.3333333333333335]);
  });
});
