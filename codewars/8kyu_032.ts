// Alan Partridge II - Apple Turnover

import { assert } from 'chai';

export function apple (x: number | string): string {
  enum Response {
    HOTTHANSUN = 'It\'s hotter than the sun!!',
    NOTHOTTHANSUN = 'Help yourself to a honeycomb Yorkie for the glovebox.'
  }
  return Number(x) ** 2 > 1000 ? Response.HOTTHANSUN : Response.NOTHOTTHANSUN;
}

// Test
describe('Basic test', () => {
  it('Basic test should work', () => {
    assert.equal(apple('50'), 'It\'s hotter than the sun!!');
    assert.equal(apple(4), 'Help yourself to a honeycomb Yorkie for the glovebox.');
    assert.equal(apple('12'), 'Help yourself to a honeycomb Yorkie for the glovebox.');
    assert.equal(apple(60), 'It\'s hotter than the sun!!');
  });
});
