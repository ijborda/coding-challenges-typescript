// Reverse or rotate?

import { assert } from 'chai';

export function revRot (s: string, sz: number): string {
  const regex = new RegExp(`\\d{${sz}}`, 'g');
  return (s.match(regex) || [])
    .map(chunk => isSumOfCubesEven(chunk) ? reverse(chunk) : rotateLeft(chunk))
    .join('');
}

const isSumOfCubesEven = (str: string): boolean => {
  return str.split('').reduce((acc, a) => acc + Math.pow(+a, 3), 0) % 2 === 0;
};

const rotateLeft = (str: string): string => {
  return str.slice(1) + str[0];
};

const reverse = (str: string): string => {
  return str.split('').reverse().join('');
};

// Test
function testing (actual:string, expected:string) {
  assert.strictEqual(actual, expected);
}

describe('Fixed Tests', function () {
  it('Basic tests revrot', function () {
    testing(revRot('1234', 0), '');
    testing(revRot('', 0), '');
    testing(revRot('1234', 5), '');
    const s = '733049910872815764';
    testing(revRot(s, 5), '330479108928157');
  });
});
