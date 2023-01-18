// Scaling Squared Strings

import { assert } from 'chai';

export const scale = (s:string, h:number, v:number): string => {
  return s.split('\n')
    .map(a => repeatEachLetter(a, h))
    .map(a => repeatEachString(a, v))
    .join('\n');
};

const repeatEachLetter = (str: string, num: number): string => {
  return str.split('')
    .map(str => str.repeat(num))
    .join('');
};

const repeatEachString = (str: string, length: number): string => {
  return Array.from({ length })
    .fill(str)
    .filter(a => a)
    .join('\n');
};

function testing (strng:string, k:number, n:number, expected:string) {
  assert.strictEqual(scale(strng, k, n), expected);
}

describe('Fixed Tests', function () {
  it('Basic tests scale', function () {
    const a = 'abcd\nefgh\nijkl\nmnop';
    const r = 'aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp';
    testing(a, 2, 3, r);
    // testing('Kj\nSH', 1, 2, 'Kj\nKj\nSH\nSH');
    // testing('', 1, 2, '');
  });
});
