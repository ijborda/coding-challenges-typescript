// Holiday VI - Shark Pontoon

import { assert } from 'chai';

export function shark (pontoonDistance: number, sharkDistance: number, youSpeed: number, sharkSpeed: number, dolphin: boolean): string {
  enum Response {
    ALIVE = 'Alive!',
    DEAD = 'Shark Bait!'
  }
  const sharkTimeToReach = (sharkDistance / sharkSpeed) * (dolphin ? 2 : 1);
  const yourTimeToReach = pontoonDistance / youSpeed;
  return yourTimeToReach < sharkTimeToReach ? Response.ALIVE : Response.DEAD;
}

// Test
describe('Basic tests', () => {
  it('Should pass basic tests', () => {
    assert.equal(shark(12, 50, 4, 8, true), 'Alive!');
    assert.equal(shark(7, 55, 4, 16, true), 'Alive!');
    assert.equal(shark(24, 0, 4, 8, true), 'Shark Bait!');
    assert.equal(shark(40, 35, 3, 20, true), 'Shark Bait!');
    assert.equal(shark(7, 8, 3, 4, true), 'Alive!');
  });
});
