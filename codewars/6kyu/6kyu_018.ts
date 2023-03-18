// Does my number look big in this?

import { expect } from 'chai';

export function narcissistic (value: number): boolean {
  const NUM_DIGITS = value.toString().length;
  return value.toString().split('').reduce((acc, a) => acc + Math.pow(+a, NUM_DIGITS), 0) === value;
}

// Test
describe('Basic tests', () => {
  it('Basic test should work', () => {
    expect(narcissistic(7)).to.equal(true, '7 is narcissistic');
    expect(narcissistic(153)).to.equal(true, '153 is narcissistic');
    expect(narcissistic(1634)).to.equal(true, '1634 is narcissistic');
  });
});
