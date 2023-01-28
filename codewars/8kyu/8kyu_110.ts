// Transportation on vacation

import { assert } from 'chai';

export class Kata {
  public static bonusTime (salary:number, bonus:boolean):string {
    return `£${bonus ? salary * 10 : salary}`;
  }
}

describe('Fixed Tests', function () {
  it('Basic tests', function () {
    assert.equal(Kata.bonusTime(10000, true), '£100000');
    assert.equal(Kata.bonusTime(10000, false), '£10000');
    assert.equal(Kata.bonusTime(25000, true), '£250000');
    assert.equal(Kata.bonusTime(60000, false), '£60000');
    assert.equal(Kata.bonusTime(2, true), '£20');
    assert.equal(Kata.bonusTime(78, false), '£78');
    assert.equal(Kata.bonusTime(67890, true), '£678900');
  });
});
