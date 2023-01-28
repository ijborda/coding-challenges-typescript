// DNA to RNA Conversion

import { assert } from 'chai';

export function DNAtoRNA (dna: string): string {
  return dna.split('').map(a => a === 'T' ? 'U' : a).join('');
}

// Test
describe('Sample Test Cases', function () {
  it('Should return a string', function () {
    assert.equal(DNAtoRNA('TTTT'), 'UUUU');
    assert.equal(DNAtoRNA('GCAT'), 'GCAU');
    assert.equal(DNAtoRNA('GACCGCCGCC'), 'GACCGCCGCC');
  });
});
