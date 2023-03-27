// Tortoise racing

import { assert } from 'chai';

export const race = (v1:number, v2:number, g:number): number[] | null => {
  if (v1 >= v2) {
    return null;
  }

  const HOUR_TO_SEC_MULT = 60 * 60;
  const MINS_TO_SEC_MULT = 60;

  let secToCatch = g / (v2 - v1) * HOUR_TO_SEC_MULT;
  const hour = Math.floor(secToCatch / HOUR_TO_SEC_MULT);

  secToCatch -= hour * HOUR_TO_SEC_MULT;
  const min = Math.floor(secToCatch / MINS_TO_SEC_MULT);

  secToCatch -= min * MINS_TO_SEC_MULT;
  const sec = Math.floor(secToCatch);

  return [hour, min, sec];
};

// Test
function testing (v1:number, v2:number, g:number, expected:number[]|null) {
  const act = race(v1, v2, g);
  assert.deepEqual(act, expected);
}

describe('Fixed Tests', function () {
  it('Basic tests race', function () {
    testing(720, 850, 70, [0, 32, 18]);
    testing(80, 91, 37, [3, 21, 49]);
    testing(80, 100, 40, [2, 0, 0]);
    testing(720, 850, 37, [0, 17, 4]);
  });
});
