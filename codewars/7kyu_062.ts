// Speed Control

import { assert } from 'chai';

export const gps = (s:number, xs:number[]):number => {
  if (xs.length < 2) {
    return 0;
  }
  const sections = xs.slice(1).map((a, i) => a - xs[i]);
  const hourlySpeeds = sections.map(a => hourlySpeed(a, s));
  return Math.max(...hourlySpeeds);
};

const hourlySpeed = (delta_distance: number, s: number): number => {
  const SECONDS_IN_HOURS = 3600;
  return (SECONDS_IN_HOURS * delta_distance) / s;
};

function testing (actual:number, expected:number) {
  assert.approximately(actual, expected, 1);
}

describe('Fixed Tests', function () {
  it('Basic tests gps', function () {
    let x = [0.0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61];
    let s = 20;
    let u = 41;
    testing(gps(s, x), u);
    x = [0.0, 0.11, 0.22, 0.33, 0.44, 0.65, 1.08, 1.26, 1.68, 1.89, 2.1, 2.31, 2.52, 3.25];
    s = 12;
    u = 219;
    testing(gps(s, x), u);
    x = [0.0, 0.18, 0.36, 0.54, 0.72, 1.05, 1.26, 1.47, 1.92, 2.16, 2.4, 2.64, 2.88, 3.12, 3.36, 3.6, 3.84];
    s = 20;
    u = 80;
    testing(gps(s, x), u);
  });
});
