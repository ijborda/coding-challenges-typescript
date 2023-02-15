// Simple Fun #88: Sort By Height

import { assert } from 'chai';

export function tapCodeTranslation (text: string): string {
  return text
    .split('')
    .map(a => getCoords(a))
    .flat()
    .map(a => '.'.repeat(a))
    .join(' ');
}

const getCoords = (letter: string): number[] => {
  const MAP = [
    ['A', 'B', 'C', 'D', 'E'],
    ['F', 'G', 'H', 'I', 'J'],
    ['L', 'M', 'N', 'O', 'P'],
    ['Q', 'R', 'S', 'T', 'U'],
    ['V', 'W', 'X', 'Y', 'Z']
  ];
  const letterUP = letter.toUpperCase() === 'K' ? 'C' : letter.toUpperCase();

  let x = 0;
  let y = 0;

  MAP.every((row, i) => {
    if (row.includes(letterUP)) {
      x = i + 1;
      y = row.findIndex(a => a === letterUP) + 1;
      return false; // Break
    }
    return true; // Continue
  });

  return [x, y];
};

// Test
describe('Tests', () => {
  it('Sample tests', () => {
    assert.equal(tapCodeTranslation('test'), '.... .... . ..... .... ... .... ....', 'Text: "test"');
    assert.equal(tapCodeTranslation('taps'), '.... .... . . ... ..... .... ...', 'Text: "taps"');
    assert.equal(tapCodeTranslation('knocks'), '. ... ... ... ... .... . ... . ... .... ...', 'Text: "knocks"');
  });
});
