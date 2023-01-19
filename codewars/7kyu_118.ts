// Credit card issuer checking

import { assert } from 'chai';

enum Issuer {
  VISA = 'VISA',
  AMEX = 'AMEX',
  Mastercard = 'Mastercard',
  Discover = 'Discover',
  Unknown = 'Unknown',
}

export const getIssuer = (x: number): Issuer => {
  const cardNum = x.toString();
  switch (true) {
    case isAmex(cardNum):
      return Issuer.AMEX;
    case isDiscover(cardNum):
      return Issuer.Discover;
    case isMastercard(cardNum):
      return Issuer.Mastercard;
    case isVisa(cardNum):
      return Issuer.VISA;
    default:
      return Issuer.Unknown;
  }
};

const isAmex = (numString: string): boolean => {
  return numString.length === 15 && ['34', '37'].includes(numString.substring(0, 2));
};

const isDiscover = (numString: string): boolean => {
  return numString.length === 16 && ['6011'].includes(numString.substring(0, 4));
};

const isMastercard = (numString: string): boolean => {
  return numString.length === 16 && ['51', '52', '53', '54', '55'].includes(numString.substring(0, 2));
};

const isVisa = (numString: string): boolean => {
  return (numString.length === 13 || numString.length === 16) && ['4'].includes(numString.substring(0, 1));
};

describe('getIssuer', function () {
  it('It should detect a VISA card', function () {
    assert.equal(getIssuer(4111111111111111), Issuer.VISA);
    assert.equal(getIssuer(378282246310005), Issuer.AMEX);
    // assert.equal(getIssuer(9111111111111111), Issuer.Unknown);
  });
});
