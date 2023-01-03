// Ordered Count of Characters

import { assert } from 'chai';

export function orderedCount (text: string): [string, number][] {
  const aggregate = text.split('').reduce((acc, a) => {
    if (a in acc) {
      acc[a] += 1;
    } else {
      acc[a] = 1;
    }
    return acc;
  }, {} as Record<string, number>);
  return Object.entries(aggregate).sort((a, b) => text.indexOf(a[0]) - text.indexOf(b[0])) as [string, number][];
}

const fixedInput = [
  'abracadabra',
  'Code Wars',
  '233312'
];

const fixedExpected = [
  [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]],
  [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]],
  [['2', 2], ['3', 3], ['1', 1]]
];
describe('Sample Tests', function () {
  for (let i = 0; i < fixedInput.length; i++) {
    const input = fixedInput[i];
    const expected = fixedExpected[i];
    it('text: ' + JSON.stringify(input), function () {
      assert.deepEqual(orderedCount(input), expected);
    });
  }
});
