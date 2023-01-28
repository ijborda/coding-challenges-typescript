// Total amount of points

import { assert } from 'chai';

export function points (games : string[]): number {
  return games.reduce((acc, a) => {
    const team = a.split(':')[0];
    const opponent = a.split(':')[1];

    if (team > opponent) {
      return acc + 3;
    } else if (team < opponent) {
      return acc;
    } else {
      return acc + 1;
    }
  }, 0);
}

// Test
describe('Basic tests', function () {
  it("Testing for points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3'])", function () {
    assert.equal(points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3']), 30);
  });
  it("Testing for points(['1:1','2:2','3:3','4:4','2:2','3:3','4:4','3:3','4:4','4:4'])", function () {
    assert.equal(points(['1:1', '2:2', '3:3', '4:4', '2:2', '3:3', '4:4', '3:3', '4:4', '4:4']), 10);
  });
  it("Testing for points(['0:1','0:2','0:3','0:4','1:2','1:3','1:4','2:3','2:4','3:4'])", function () {
    assert.equal(points(['0:1', '0:2', '0:3', '0:4', '1:2', '1:3', '1:4', '2:3', '2:4', '3:4']), 0);
  });
  it("Testing for points(['1:0','2:0','3:0','4:0','2:1','1:3','1:4','2:3','2:4','3:4'])", function () {
    assert.equal(points(['1:0', '2:0', '3:0', '4:0', '2:1', '1:3', '1:4', '2:3', '2:4', '3:4']), 15);
  });
  it("Testing for points(['1:0','2:0','3:0','4:4','2:2','3:3','1:4','2:3','2:4','3:4'])", function () {
    assert.equal(points(['1:0', '2:0', '3:0', '4:4', '2:2', '3:3', '1:4', '2:3', '2:4', '3:4']), 12);
  });
});
