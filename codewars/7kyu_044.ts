// Maximum Length Difference

import { assert } from 'chai';

export const mxdiflg = (a1:string[], a2:string[]): number => {
  if (a1.length === 0 || a2.length === 0) {
    return -1;
  }
  const min1 = Math.min(...a1.map(a => a.length));
  const max1 = Math.max(...a1.map(a => a.length));
  const min2 = Math.min(...a2.map(a => a.length));
  const max2 = Math.max(...a2.map(a => a.length));
  return Math.max(max1 - min2, max2 - min1);
};

describe('Fixed Tests', function () {
  it('Basic tests mxdiflg', function () {
    let s1 = ['hoqq', 'bbllkw', 'oox', 'ejjuyyy', 'plmiis', 'xxxzgpsssa', 'xxwwkktt', 'znnnnfqknaz', 'qqquuhii', 'dvvvwz'];
    let s2 = ['cccooommaaqqoxii', 'gggqaffhhh', 'tttoowwwmmww'];
    assert.equal(mxdiflg(s1, s2), 13);
    s1 = ['ejjjjmmtthh', 'zxxuueeg', 'aanlljrrrxx', 'dqqqaaabbb', 'oocccffuucccjjjkkkjyyyeehh'];
    s2 = ['bbbaaayddqbbrrrv'];
    assert.equal(mxdiflg(s1, s2), 10);
    s2 = [];
    s1 = ['cccooommaaqqoxii', 'gggqaffhhh', 'tttoowwwmmww'];
    assert.equal(mxdiflg(s1, s2), -1);
  });
});
