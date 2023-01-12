// Disarium Number (Special Numbers Series #3)

import { assert } from 'chai';

export function disariumNumber (n: number) {
  enum Response {
    DISARIUM = 'Disarium !!',
    NOT_DISARIUM = 'Not !!'
  }
  const calculated = n.toString().split('').reduce((acc, a, i) => acc + Math.pow(+a, i + 1), 0);
  return calculated === n ? Response.DISARIUM : Response.NOT_DISARIUM;
}

describe('Basic tests', () => {
  it('Testing for 89', () => assert.strictEqual(disariumNumber(89), 'Disarium !!'));
  it('Testing for 564', () => assert.strictEqual(disariumNumber(564), 'Not !!'));
  it('Testing for 1024', () => assert.strictEqual(disariumNumber(1024), 'Not !!'));
  it('Testing for 135', () => assert.strictEqual(disariumNumber(135), 'Disarium !!'));
  it('Testing for 136586', () => assert.strictEqual(disariumNumber(136586), 'Not !!'));
});
