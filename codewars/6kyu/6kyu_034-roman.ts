// Bouncing Balls

import { assert } from 'chai';

export function solution (number: number): string {
  // const convert = {
  //   1: 'I',
  //   5: 'V',
  //   10: 'X',
  //   50: 'L',
  //   100: 'C',
  //   500: 'D',
  //   1000: 'M'
  // };
  let romanNumerals = '';
  let remaining = number;
  while (remaining !== 0) {
    if (remaining >= 1000) {
      remaining -= 1000;
      romanNumerals += 'M';
    } else if (remaining >= 500) {
      if (remaining >= 900) {
        remaining -= 900;
        romanNumerals += 'CM';
      } else {
        remaining -= 500;
        romanNumerals += 'D';
      }
    } else if (remaining >= 100) {
      if (remaining === 400) {
        remaining -= 400;
        romanNumerals += 'CD';
      } else {
        remaining -= 100;
        romanNumerals += 'C';
      }
    } else if (remaining >= 50) {
      remaining -= 50;
      romanNumerals += 'L';
    } else if (remaining >= 10) {
      if (remaining === 40) {
        remaining -= 40;
        romanNumerals += 'XL';
      } else {
        remaining -= 10;
        romanNumerals += 'X';
      }
    } else if (remaining >= 5) {
      remaining -= 5;
      romanNumerals += 'V';
    } else {
      if (remaining === 4) {
        remaining -= 4;
        romanNumerals += 'IV';
      } else {
        remaining -= 1;
        romanNumerals += 'I';
      }
    }
  }
  return romanNumerals;
}

// Test
describe('solution', function () {
  it('basic', function () {
    assert.strictEqual(solution(1000), 'M');
    assert.strictEqual(solution(4), 'IV');
    assert.strictEqual(solution(1), 'I');
    assert.strictEqual(solution(1990), 'MCMXC');
    assert.strictEqual(solution(2008), 'MMVIII');
    // assert.strictEqual(solution(1444), 'MCDXLIV');
  });
});
