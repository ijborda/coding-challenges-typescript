// Credit card issuer checking

import { assert } from 'chai';

export function nextHappyYear (year: number): number {
  year++;
  while (!isHappyYear(year)) {
    year++;
  }
  return year;
}

const isHappyYear = (year: number): boolean => {
  return (new Set(year.toString())).size === 4;
};

describe('Basic tests', () => {
  it('Testing for 1001', () => {
    assert.strictEqual(nextHappyYear(1001), 1023);
  });
  it('Testing for 1123', () => {
    assert.strictEqual(nextHappyYear(1123), 1203);
  });
  it('Testing for 2001', () => {
    assert.strictEqual(nextHappyYear(2001), 2013);
  });
  it('Testing for 2334', () => {
    assert.strictEqual(nextHappyYear(2334), 2340);
  });
  it('Testing for 3331', () => {
    assert.strictEqual(nextHappyYear(3331), 3401);
  });
  it('Testing for 1987', () => {
    assert.strictEqual(nextHappyYear(1987), 2013);
  });
  it('Testing for 5555', () => {
    assert.strictEqual(nextHappyYear(5555), 5601);
  });
  it('Testing for 7712', () => {
    assert.strictEqual(nextHappyYear(7712), 7801);
  });
  it('Testing for 8088', () => {
    assert.strictEqual(nextHappyYear(8088), 8091);
  });
  it('Testing for 8999', () => {
    assert.strictEqual(nextHappyYear(8999), 9012);
  });
});
