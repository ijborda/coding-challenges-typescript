// Abbreviate a Two Word Name

import { assert } from 'chai';

export function abbrevName (name: string): string {
  return name.split(' ').map(a => a.slice(0, 1).toUpperCase()).join('.');
}

// Test
describe('Sample Test Cases', function () {
  const SamHarris = abbrevName('Sam Harris');
  const PatrickFeenan = abbrevName('Patrick Feenan');
  const RFavuzzi = abbrevName('R Favuzzi');
  it('Should return a proper abbreviate', function () {
    assert.strictEqual(SamHarris, 'S.H', 'Should return S.H');
    assert.strictEqual(PatrickFeenan, 'P.F', 'Should return P.F');
    assert.strictEqual(RFavuzzi, 'R.F', 'Should return R.F');
  });
});
