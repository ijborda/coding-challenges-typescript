// Drone Fly-By

import { assert } from 'chai';

export function flyBy (lamps: string, drone: string): string {
  return 'o'.repeat(drone.length)
    .padEnd(lamps.length, 'x')
    .slice(0, lamps.length);
}

describe('Example Tests', function () {
  it('Basic Tests', function () {
    assert.strictEqual(flyBy('xxxxxx', '====T'), 'ooooox');
    assert.strictEqual(flyBy('xxxxxxxxx', '==T'), 'oooxxxxxx');
    assert.strictEqual(flyBy('xxxxxxxxxxxxxxx', '=========T'), 'ooooooooooxxxxx');
    assert.strictEqual(flyBy('xxxxxxxxxxxxxx', '10101010101010101010'), 'oooooooooooooo');
  });
});
