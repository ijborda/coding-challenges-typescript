// Split The Bill

import { assert } from 'chai';

export function splitTheBill (x: {[k: string]: number}): {[k: string]: number} {
  const billPerPerson = Object.values(x).reduce((acc, a) => acc + a, 0) / Object.values(x).length;

  for (const person in x) {
    x[person] = +(x[person] - billPerPerson).toFixed(2);
  }

  return x;
}

describe('solution', function () {
  it('Basic Tests', function () {
    assert.deepEqual(splitTheBill({ A: 20, B: 15, C: 10 }), { A: 5, B: 0, C: -5 });
    assert.deepEqual(splitTheBill({ A: 40, B: 25, X: 10 }), { A: 15, B: 0, X: -15 });
  });
});
