// Who likes it?

import { assert } from 'chai';

export const likes = (a : string[]) : string => {
  const numLikes = a.length;
  switch (numLikes) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${a[0]} likes this`;
    case 2:
      return `${a[0]} and ${a[1]} like this`;
    case 3:
      return `${a[0]}, ${a[1]} and ${a[2]} like this`;
    default:
      return `${a[0]}, ${a[1]} and ${numLikes - 2} others like this`;
  }
};

// Test
describe('static tests', function () {
  it('should return correct text', function () {
    assert.equal(likes([]), 'no one likes this');
    assert.equal(likes(['Peter']), 'Peter likes this');
    assert.equal(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
    assert.equal(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
    assert.equal(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
  });
});
