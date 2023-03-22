// Which are in?

import chai, { assert } from 'chai';

export function inArray (a1: string[], a2: string[]): string[] {
  return a1.filter(substr => a2.some(str => str.includes(substr))).sort();
}

// Test
chai.config.truncateThreshold = 0;

function testing (a1:string[], a2:string[], expected:string[]) {
  assert.deepEqual(inArray(a1, a2), expected);
}

describe('Fixed Tests inArray', function () {
  it('Basic tests', function () {
    const a2:string[] = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];

    let a1:string[] = ['arp', 'live', 'strong'];
    testing(a1, a2, ['arp', 'live', 'strong']);
    a1 = ['xyz', 'live', 'strong'];
    testing(a1, a2, ['live', 'strong']);
    a1 = ['live', 'strong', 'arp'];
    testing(a1, a2, ['arp', 'live', 'strong']);
    a1 = ['live', 'strong', 'lyal', 'lysh', 'arp'];
    testing(a1, a2, ['arp', 'live', 'strong']);
    a1 = ['tarp', 'mice', 'bull'];
    testing(a1, a2, []);
    a1 = [];
    testing(a1, a2, []);
  });
});
