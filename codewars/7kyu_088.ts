// All Inclusive?

import { assert } from 'chai';

export function containAllRots (str: string, arr: string[]): boolean {
  const rotationsArr = rotations(str);
  return rotationsArr.every(a => arr.includes(a));
}

const rotations = (string: string): string[] => {
  const rotationsArr = [];
  for (let i = 0; i < string.length; i++) {
    if (i === 0) {
      rotationsArr.push(string);
    } else {
      const prev: string = rotationsArr[rotationsArr.length - 1];
      const first: string = prev[0];
      const remaining: string = prev.split('').slice(1).join('');
      rotationsArr.push(`${remaining}${first}`);
    }
  }
  return rotationsArr;
};

describe('Fixed Tests containAllRots', function () {
  it('Basic tests', function () {
    assert.strictEqual(containAllRots('', []), true);
    assert.strictEqual(containAllRots('', ['bsjq', 'qbsj']), true);
    assert.strictEqual(containAllRots('bsjq', ['bsjq', 'qbsj', 'sjqb', 'twZNsslC', 'jqbs']), true);
    assert.strictEqual(containAllRots('XjYABhR', ['TzYxlgfnhf', 'yqVAuoLjMLy', 'BhRXjYA', 'YABhRXj', 'hRXjYAB', 'jYABhRX', 'XjYABhR', 'ABhRXjY']), false);
  });
});
