// Special Number (Special Numbers Series #5)

import { strict as assert } from 'assert';

function specialNumber (n: number): string {
  enum Response {
    SPECIAL = 'Special!!',
    NOTSPECIAL = 'NOT!!'
  }

  const SPECIALS = [0, 1, 2, 3, 4, 5];
  const isSpecial = n.toString().split('').map(Number).every(a => SPECIALS.includes(a));

  return isSpecial ? Response.SPECIAL : Response.NOTSPECIAL;
}

// Test
describe('Basic tests', () => {
  it('Testing for 2', () => assert.strictEqual(specialNumber(2), 'Special!!'));
  it('Testing for 3', () => assert.strictEqual(specialNumber(3), 'Special!!'));
  it('Testing for 6', () => assert.strictEqual(specialNumber(6), 'NOT!!'));
  it('Testing for 9', () => assert.strictEqual(specialNumber(9), 'NOT!!'));
  it('Testing for 11', () => assert.strictEqual(specialNumber(11), 'Special!!'));
  it('Testing for 55', () => assert.strictEqual(specialNumber(55), 'Special!!'));
  it('Testing for 26', () => assert.strictEqual(specialNumber(26), 'NOT!!'));
  it('Testing for 92', () => assert.strictEqual(specialNumber(92), 'NOT!!'));
  it('Testing for 25432', () => assert.strictEqual(specialNumber(25432), 'Special!!'));
  it('Testing for 2783', () => assert.strictEqual(specialNumber(2783), 'NOT!!'));
});
