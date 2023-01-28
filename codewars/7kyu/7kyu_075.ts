// Strong Number (Special Numbers Series #2)

import { expect } from 'chai';

export const strongNumber = (num: number): string => {
  enum Response {
    STRONG = 'STRONG!!!!',
    NOT_STRONG = 'Not Strong !!'
  }
  const factorial = num.toString().split('').reduce((acc, a) => acc + calcFactorial(+a), 0);
  return factorial === num ? Response.STRONG : Response.NOT_STRONG;
};

const calcFactorial = (num: number): number => {
  if (num === 1) {
    return 1;
  }
  return calcFactorial(num - 1) * num;
  // NOT RECURSION IMPLEMENTAtiON
  // return Array.from({ length: num }, (_, i) => i + 1).reduce((acc, a) => acc * a, 1);
};

const strong = 'STRONG!!!!';
const notStrong = 'Not Strong !!';

describe('strongNumber', () => {
  it('should return strong when input is 1', () => {
    const expected = strong;
    const actual = strongNumber(1);

    expect(actual).to.eql(expected);
  });

  it('should return strong when input is 2', () => {
    const expected = strong;
    const actual = strongNumber(2);

    expect(actual).to.eql(expected);
  });

  it('should return strong when input is 145', () => {
    const expected = strong;
    const actual = strongNumber(145);

    expect(actual).to.eql(expected);
  });

  it('should return notStrong when input is 7', () => {
    const expected = notStrong;
    const actual = strongNumber(7);

    expect(actual).to.eql(expected);
  });

  it('should return notStrong when input is 93', () => {
    const expected = notStrong;
    const actual = strongNumber(93);

    expect(actual).to.eql(expected);
  });

  it('should return notStrong when input is 185', () => {
    const expected = notStrong;
    const actual = strongNumber(185);

    expect(actual).to.eql(expected);
  });
});
