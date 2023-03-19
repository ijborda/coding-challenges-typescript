// Build Tower

import { assert } from 'chai';

export const high = (str: string): string => {
  const scores = str.split(' ').map(getScore);
  const indexHigh = scores.findIndex(score => score === Math.max(...scores));
  return str.split(' ')[indexHigh];
};

const getScore = (str: string): number => {
  return str.split('').reduce((score, letter) => score + letter.charCodeAt(0) - 96, 0);
};

// Alternative
// export const high = (str: string): string => {
//   return str.split(' ').reduce((max, word) => getScore(word) > getScore(max) ? word : max, '');
// };

// Test
const solutions = [
  ['man i need a taxi up to ubud', 'taxi'],
  ['what time are we climbing up the volcano', 'volcano'],
  ['take me to semynak', 'semynak'],
  ['massage yes massage yes massage', 'massage'],
  ['take two bintang and a dance please', 'bintang'],
  ['aa b', 'aa'],
  ['b aa', 'b'],
  ['bb d', 'bb'],
  ['d bb', 'd'],
  ['aaa b', 'aaa']
];
describe('Sample test', () => {
  it('works with test inputs', () => {
    solutions.forEach(([input, expected]) => {
      assert.strictEqual(high(input), expected);
    });
  });
});
