// Survive the attack

import { assert } from 'chai';

export const hasSurvived = (attackers : number[], defenders : number[]) : boolean => {
  const atkNumSoldiers = attackers.length;
  const defNumSoldiers = defenders.length;

  let atkNumSurvivors: number;
  let defNumSurvivors: number;

  if (atkNumSoldiers > defNumSoldiers) {
    atkNumSurvivors = attackers.filter((atk, i) => atk > (defenders[i] || -1)).length;
    defNumSurvivors = atkNumSoldiers - atkNumSurvivors;
  } else {
    defNumSurvivors = defenders.filter((def, i) => def > (attackers[i] || -1)).length;
    atkNumSurvivors = defNumSoldiers - defNumSurvivors;
  }

  if (atkNumSurvivors === defNumSurvivors) {
    const atkPower = attackers.reduce((acc, a) => acc + a, 0);
    const defPower = defenders.reduce((acc, a) => acc + a, 0);

    return defPower >= atkPower;
  }

  return atkNumSurvivors < defNumSurvivors;
};

// Test
describe('example', function () {
  it('Basic Tests', function () {
    assert.strictEqual(hasSurvived([2, 9, 9, 7], [1, 1, 3, 8]), false);
    assert.strictEqual(hasSurvived([1, 3, 5, 7], [2, 4, 6, 8]), true);
    assert.strictEqual(hasSurvived([10, 10, 1, 1], [4, 4, 7, 7]), true);
    assert.strictEqual(hasSurvived([], [1, 2, 3]), true);
    assert.strictEqual(hasSurvived([1, 2, 3], []), false);
    assert.strictEqual(hasSurvived([32, 65, 21, 83, 85, 7, 71, 45, 20, 63], [83, 44, 38, 55, 84, 80, 58, 20, 4, 74]), false);
  });
});
