// Frequency sequence

import { assert } from 'chai';

export function freqSeq (str: string, sep: string): string {
  const freq = str.split('').reduce((acc, a) => {
    if (a in acc) {
      acc[a] += 1;
    } else {
      acc[a] = 1;
    }
    return acc;
  }, {} as { [key: string]: number });
  return str.split('').map(a => freq[a]).join(sep);
}

describe('Sample Test Cases', function () {
  it('Should return a string', function () {
    assert.equal(freqSeq('hello world', '-'), '1-1-3-3-2-1-1-2-1-3-1');
    assert.equal(freqSeq('19999999', ':'), '1:7:7:7:7:7:7:7');
    assert.equal(freqSeq('^^^**$', 'x'), '3x3x3x2x2x1');
  });
});
