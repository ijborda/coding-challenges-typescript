// Playing with passphrases

import { assert } from 'chai';

export function playPass (s: string, n: number): string {
  return s
    .split('')
    .map((char, i) => {
      if (/^\d$/.test(char)) {
        return Math.abs(9 - +char);
      } else if (/^[a-z]$/i.test(char)) {
        const newCharCode = ((char.toLowerCase().charCodeAt(0) - 97 + n) % 26) + 97;
        const newLetter = String.fromCharCode(newCharCode);
        return i % 2 ? newLetter.toLowerCase() : newLetter.toUpperCase();
      } else {
        return char;
      }
    })
    .reverse()
    .join('');
}

// Test
function testing (s:string, n:number, expected:string) {
  assert.equal(playPass(s, n), expected);
}

describe('Fixed Tests playPass', function () {
  it('Basic tests', function () {
    testing('I LOVE YOU!!!', 1,
      '!!!vPz fWpM J');
    testing('MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015', 2,
      '4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO');
  });
});
