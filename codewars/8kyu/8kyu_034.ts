// My head is at the wrong end!

import { expect } from 'chai';

export function fixTheMeerkat (arr: string[]): string[] {
  return arr.reverse();
}

// Test
describe('Basic tests', () => {
  it('Basic test should work', () => {
    expect(fixTheMeerkat(['tail', 'body', 'head'])).to.eql(['head', 'body', 'tail']);
    expect(fixTheMeerkat(['tails', 'body', 'heads'])).to.eql(['heads', 'body', 'tails']);
    expect(fixTheMeerkat(['bottom', 'middle', 'top'])).to.eql(['top', 'middle', 'bottom']);
    expect(fixTheMeerkat(['ground', 'rainbow', 'sky'])).to.eql(['sky', 'rainbow', 'ground']);
    expect(fixTheMeerkat(['lower legs', 'torso', 'upper legs'])).to.eql(['upper legs', 'torso', 'lower legs']);
  });
});
