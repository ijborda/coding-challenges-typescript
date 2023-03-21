// Are they the "same"?

import { assert } from 'chai';

export function comp (a1: number[] | null, a2: number[] | null): boolean {
  if (!a1 || !a2) {
    return false;
  }
  const length = a1.length;
  for (let i = 0; i < length; i++) {
    if (a2.length === 0) {
      return false;
    }

    const toRemove = a1.shift();
    if (toRemove !== 0 && !toRemove) {
      return false;
    }

    const indexToRemove = a2.findIndex(a => a === toRemove ** 2);
    if (indexToRemove === -1) {
      return false;
    }

    a2 = [...a2.slice(0, indexToRemove), ...a2.slice(indexToRemove + 1)];
  }
  return a1.length === 0 && a2.length === 0;
}

// Test
function testing (a1: number[] | null, a2: number[] | null, expected: boolean) {
  let s1 = '';
  let s2 = '';
  if (a1 !== null) s1 = a1.toString(); else s1 = 'null';
  if (a2 !== null) s2 = a2.toString(); else s2 = 'null';
  assert.strictEqual(comp(a1, a2), expected, 'Error with [' + s1 + '] / [' + s2 + ']\n');
}

describe('Fixed Tests comp', function () {
  it('Basic tests 1', function () {
    const a1: number[] = [121, 144, 19, 161, 19, 144, 19, 11];
    const a2: number[] = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
    testing(a1, a2, true);
  });
  it('Basic tests 2', function () {
    const a1: number[] = [121, 144, 19, 161, 19, 144, 19, 11];
    const a2: number[] = [11 * 21, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
    testing(a1, a2, false);
  });
  it('Basic tests 3', function () {
    const a1: number[] = [76, 41, 50, 71, 1, 0, 84, 80, 31, 49, 46, 49, 70, 42, 24];
    const a2: number[] = [5776, 1681, 2500, 5041, 1, 0, 7056, 6400, 961, 2401, 2116, 2401, 4900, 1764, 576];
    testing(a1, a2, true);
  });
});
