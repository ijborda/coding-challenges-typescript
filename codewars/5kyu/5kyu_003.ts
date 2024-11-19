// Simple Pig Latin

import { assert } from 'chai';

const SUFFIX = 'ay';

const findFirstLetter = (word: string) => {
  const matched = word.match(/[a-z]/i);
  if (!matched) return;
  return {
    letter: matched[0],
    index: matched.index as number
  };
};

const removeLetter = (word: string, index: number) => {
  return word.slice(0, index) + word.slice(index + 1);
};

const piggify = (word: string) => {
  const matched = findFirstLetter(word);
  if (!matched) return word;
  const { index, letter } = matched;
  return removeLetter(word, index) + letter + SUFFIX;
};

export const pigIt = (sentence: string): string => {
  return sentence
    .split(' ')
    .map(word => piggify(word))
    .join(' ');
};

// Test
describe('Tests', () => {
  it('test', () => {
    assert.strictEqual(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay');
    assert.strictEqual(pigIt('This is my string'), 'hisTay siay ymay tringsay');
    assert.strictEqual(pigIt('a'), 'aay');
    assert.strictEqual(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay');
    assert.strictEqual(pigIt('Hello world !'), 'elloHay orldway !');
    assert.strictEqual(pigIt('!Hello world !'), '!elloHay orldway !');
  });
});
