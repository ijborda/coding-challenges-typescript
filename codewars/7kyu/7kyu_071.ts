// Alphabetical Addition

import { assert } from 'chai';

export function addLetters (...letters: string[]): string {
  if (letters.length === 0) {
    return 'z';
  }
  const sum = letters.reduce((acc, a) => acc + letterToAlphabet(a), 0);
  return asciiToAlphabet(sum);
}

const asciiToAlphabet = (ascii: number): string => {
  const MAX_LETTERS = 26;
  if (ascii > MAX_LETTERS) {
    ascii = ascii % MAX_LETTERS || MAX_LETTERS;
  }
  return String.fromCharCode(ascii + 'a'.charCodeAt(0) - 1);
};

const letterToAlphabet = (letter: string): number => {
  return letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
};

describe('Fixed tests', () => {
  const tests = [
    [['a', 'b', 'c'], 'f'],
    [['z'], 'z'],
    [['a', 'b'], 'c'],
    [['c'], 'c'],
    [['z', 'a'], 'a'],
    [['y', 'c', 'b'], 'd'],
    [[], 'z']
  ];
  for (let i = 0; i < tests.length; i++) {
    const str = (<string[]>tests[i][0]).map((x: string) => `"${x}"`).join(', ');
    it(`addLetters(${str})`, () => {
      assert.strictEqual(addLetters(...(<string[]>tests[i][0])), tests[i][1]);
    });
  }
});
