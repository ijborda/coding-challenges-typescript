// A Rule of Divisibility by 7

import { assert } from 'chai';

export function seven (m: number): number[] {
  let numSteps = 0;
  while (true) {
    if (getNumDigits(m) <= 2) {
      return [m, numSteps];
    }
    m = reduceNumber(m);
    numSteps += 1;
  }
}

const getNumDigits = (a: number): number => {
  return a.toString().length;
};

const reduceNumber = (a: number): number => {
  const lastDigit = +a.toString().slice(-1);
  const remaingDigits = +a.toString().slice(0, -1);
  return remaingDigits - (2 * lastDigit);
};

describe('Fixed Tests seven', function () {
  it('Basic tests', function () {
    assert.deepEqual(seven(1021), [10, 2]);
    assert.deepEqual(seven(477557101), [28, 7]);
    assert.deepEqual(seven(1603), [7, 2]);
    assert.deepEqual(seven(371), [35, 1]);
  });
});
