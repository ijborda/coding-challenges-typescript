// Srot the inner ctonnet in dsnnieedcg oredr

import { assert } from 'chai';

export function sortTheInnerContent (words:string):string {
  return words.split(' ').map(word => innerSort(word)).join(' ');
}

const innerSort = (word: string): string => {
  if (word.length <= 2) {
    return word;
  }
  const firstLetter = word[0];
  const lastLetter = word[word.length - 1];
  const innerSort = word.slice(1, -1).split('').sort((a, b) => b.localeCompare(a)).join('');
  return `${firstLetter}${innerSort}${lastLetter}`;
};

// Test
describe('solution', function () {
  it('Example tests', function () {
    assert.equal(sortTheInnerContent('sort the inner content in descending order'), 'srot the inner ctonnet in dsnnieedcg oredr');
    assert.equal(sortTheInnerContent('wait for me'), 'wiat for me');
    assert.equal(sortTheInnerContent('this kata is easy'), 'tihs ktaa is esay');
  });
});
