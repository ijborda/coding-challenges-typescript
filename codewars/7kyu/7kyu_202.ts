// Calculate Parity bit!

import { assert } from 'chai';

export function checkParity (parity: string, bin: string): number {
  const numOne = (bin.match(/1/g) || []).length;
  if (parity === 'even') {
    return numOne % 2 === 0 ? 0 : 1;
  }
  return numOne % 2 !== 0 ? 0 : 1;
}

// Test
describe('Sample tests', function () {
  it('Tests', function () {
    assert.equal(checkParity('even', '101010'), 1);
    assert.equal(checkParity('odd', '101010'), 0);
    assert.equal(checkParity('even', '101011'), 0);
    assert.equal(checkParity('odd', '101011'), 1);
  });
});
