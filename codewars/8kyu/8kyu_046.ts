// Century From Year

import { expect } from 'chai';

export const centuryFromYear = (year: number): number => {
  return Math.floor((year - 1) / 100) + 1;
};

// Test
describe('centuryFromYear', () => {
  it('should return 18 when input is 1705', () => {
    const expected = 18;
    const actual = centuryFromYear(1705);

    expect(actual).to.eql(expected);
  });

  it('should return 19 when input is 1900', () => {
    const expected = 19;
    const actual = centuryFromYear(1900);

    expect(actual).to.eql(expected);
  });

  it('should return 17 when input is 1601', () => {
    const expected = 17;
    const actual = centuryFromYear(1601);

    expect(actual).to.eql(expected);
  });

  it('should return 20 when input is 2000', () => {
    const expected = 20;
    const actual = centuryFromYear(2000);

    expect(actual).to.eql(expected);
  });
});
