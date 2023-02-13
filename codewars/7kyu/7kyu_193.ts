// Hero's root

import { assert } from 'chai';

export function intRac (n: number, guess: number): number {
  const E = 1;
  const prog = [guess, nextGuess(n, guess)];

  while (true) {
    const prev = prog[prog.length - 2];
    const current = prog[prog.length - 1];

    if (Math.abs(prev - current) < E) {
      return prog.length - 1;
    }

    prog.push(nextGuess(n, current));
  }
}

const nextGuess = (n: number, prev: number): number => {
  return Math.floor((prev + n / prev) / 2);
};

// Test
function testing (n:number, guess:number, expected:number) {
  assert.equal(intRac(n, guess), expected);
}
describe('Fixed Tests intRac', function () {
  it('Basic tests', function () {
    testing(25, 1, 4);
    testing(125348, 300, 3);
    testing(236, 12, 2);
    testing(48981764, 8000, 3);
  });
});
