// Pyramid Array

import { assert } from 'chai';

export const dashatize = (num: number) => {
  if (typeof num !== 'number') {
    return 'NaN';
  }
  const transformed = num.toString().split('').map(a => /^\d$/.test(a) && +a % 2 ? `-${a}-` : a).join('');
  const cleaned = transformed.replace(/-{2,}/g, '-').replace(/^-/, '').replace(/-$/, '');
  return cleaned;
};

// Test
const Test = {
  expect: (...args: any[]) => (assert as any)(...args),
  assertEquals: (...args: any[]) => (assert as any).equal(...args)
};
describe('Basic', function () {
  it('Basic', () => {
    Test.assertEquals(dashatize(274), '2-7-4', 'Should return 2-7-4');
    Test.assertEquals(dashatize(5311), '5-3-1-1', 'Should return 5-3-1-1');
    Test.assertEquals(dashatize(86320), '86-3-20', 'Should return 86-3-20');
    Test.assertEquals(dashatize(974302), '9-7-4-3-02', 'Should return 9-7-4-3-02');
  });
});
describe('Weird', function () {
  it('Weird', () => {
    Test.assertEquals(dashatize(NaN), 'NaN', 'Should return NaN');
    Test.assertEquals(dashatize(0), '0', 'Should return 0');
    Test.assertEquals(dashatize(-1), '1', 'Should return 1');
    Test.assertEquals(dashatize(-28369), '28-3-6-9', 'Should return 28-3-6-9');
  });
});
