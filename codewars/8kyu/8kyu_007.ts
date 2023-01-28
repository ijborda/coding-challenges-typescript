// Automorphic Number (Special Numbers Series #6)

import { strict as assert } from 'assert';

function automorphic (n: number): string {
  enum Response {
    AUTOMORPHIC = 'Automorphic',
    NOTAUTOMORPHI = 'Not!!'
  }

  const isautomorphic = (n ** 2).toString().endsWith(n.toString());

  return isautomorphic ? Response.AUTOMORPHIC : Response.NOTAUTOMORPHI;
}

// Test
describe('Basic tests', () => {
  it('Testing for 1', () => assert.strictEqual(automorphic(1), 'Automorphic'));
  it('Testing for 3', () => assert.strictEqual(automorphic(3), 'Not!!'));
  it('Testing for 6', () => assert.strictEqual(automorphic(6), 'Automorphic'));
  it('Testing for 9', () => assert.strictEqual(automorphic(9), 'Not!!'));
  it('Testing for 25', () => assert.strictEqual(automorphic(25), 'Automorphic'));
  it('Testing for 53', () => assert.strictEqual(automorphic(53), 'Not!!'));
  it('Testing for 76', () => assert.strictEqual(automorphic(76), 'Automorphic'));
  it('Testing for 95', () => assert.strictEqual(automorphic(95), 'Not!!'));
  it('Testing for 625', () => assert.strictEqual(automorphic(625), 'Automorphic'));
  it('Testing for 225', () => assert.strictEqual(automorphic(225), 'Not!!'));
});
