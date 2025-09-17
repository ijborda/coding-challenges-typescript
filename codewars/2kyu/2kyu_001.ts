/* eslint-disable comma-dangle */
// Evaluate mathematical expression
import { expect } from 'chai';

export function calc (expression: string): number {
  let answer = expression;
  while (true) {
    if (!isNaN(Number(answer))) break;
    const addInd = answer.split('').findIndex(c => c === '+');
    const subInd = answer.split('').findIndex(c => c === '-');
    const mulInd = answer.split('').findIndex(c => c === '*');
    const divInd = answer.split('').findIndex(c => c === '/');

    const isDivFirst = divInd !== -1 && divInd < mulInd;
    const isAddFirst = addInd !== -1 && addInd < subInd;

    answer = answer
      // Remove white space
      .replace(/\s+/g, '');

    if (isDivFirst) {
      answer = answer
        // Perform division
        .replace(/([\d.]+)\/([\d.]+)/g, (_, p1, p2) => String(Number(p1) / Number(p2)))
        // Perform multiplication
        .replace(/([\d.]+)\*([\d.]+)/g, (_, p1, p2) => String(Number(p1) * Number(p2)));
    } else {
      answer = answer
        // Perform multiplication
        .replace(/([\d.]+)\*([\d.]+)/g, (_, p1, p2) => String(Number(p1) * Number(p2)))
        // Perform division
        .replace(/([\d.]+)\/([\d.]+)/g, (_, p1, p2) => String(Number(p1) / Number(p2)));
    }

    if (isAddFirst) {
      answer = answer
        // Perform addition
        .replace(/([\d.]+)\+([\d.]+)/g, (_, p1, p2) => String(Number(p1) + Number(p2)))
        // Perform substraction
        .replace(/([\d.]+)-([\d.]+)/g, (_, p1, p2) => String(Number(p1) - Number(p2)));
    } else {
      answer = answer
        // Perform substraction
        .replace(/([\d.]+)-([\d.]+)/g, (_, p1, p2) => String(Number(p1) - Number(p2)))
        // Perform addition
        .replace(/([\d.]+)\+([\d.]+)/g, (_, p1, p2) => String(Number(p1) + Number(p2)));
    }

    answer = answer
      // Two negatives becomes positive
      .replace(/--/g, '+')
      // Grouped single number becomes ungrouped
      .replace(/\(([\d.]+)\)/g, (_, p1) => p1);
  }
  return Number(answer);
}

// Test
const tests: [string, number][] = [
  ['1+1', 2],
  ['1 - 1', 0],
  ['1* 1', 1],
  ['1 /1', 1],
  ['-123', -123],
  ['123', 123],
  ['2 /2+3 * 4.75- -6', 21.25],
  ['12* 123', 1476],
  ['2 / (2 + 3) * 4.33 - -6', 7.732]
];

describe('calc', function () {
  it('should evaluate correctly', () => {
    tests.forEach(function (m) {
      const x = calc(m[0]);
      const y = m[1];
      expect(x).to.equal(y, 'Expected: "' + m[0] + '" to be ' + y + ' but got ' + x);
    });
  });
});
