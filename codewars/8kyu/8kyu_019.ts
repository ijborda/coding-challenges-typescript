// Switch it Up!

import { assert } from 'chai';

function switchItUp (intNumber:number):string {
  enum Number {
    Zero,
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten
  }
  return Number[intNumber];
}

// Test
describe('solution', function () {
  it('Basic Tests', function () {
    assert.equal(switchItUp(1), 'One');
    assert.equal(switchItUp(3), 'Three');
    assert.equal(switchItUp(5), 'Five');
  });
});
