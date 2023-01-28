// Sort the Vowels!

import { assert } from 'chai';

export function sortVowels (str?: number | string | null): string {
  if (!str || typeof str === 'number') {
    return '';
  }
  return str.split('')
    .map(a => /[aeiou]/i.test(a) ? `|${a}` : `${a}|`)
    .join('\n');
}

describe('Basic tests', () => {
  it('Basic test should work', () => {
    assert.equal(sortVowels(undefined), '');
    assert.equal(sortVowels(123), '');
    assert.equal(sortVowels('Codewars'), 'C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|');
    assert.equal(sortVowels('Is RubY dEad?'), '|I\ns|\n |\nR|\n|u\nb|\nY|\n |\nd|\n|E\n|a\nd|\n?|');
    assert.equal(sortVowels('yo!'), 'y|\n|o\n!|');
    assert.equal(sortVowels('LOrEm IpsUm dOlOr sIt AmEt'), 'L|\n|O\nr|\n|E\nm|\n |\n|I\np|\ns|\n|U\nm|\n |\nd|\n|O\nl|\n|O\nr|\n |\ns|\n|I\nt|\n |\n|A\nm|\n|E\nt|');
  });
});
