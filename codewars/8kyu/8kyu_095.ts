// The Wide-Mouthed frog!

import { assert } from 'chai';

export function mouthSize (animal: string): string {
  enum Response {
    SMALL = 'small',
    WIDE = 'wide'
  }
  return animal.toLowerCase() === 'alligator' ? Response.SMALL : Response.WIDE;
}

describe('Basic tests', () => {
  it('Basic tests should pass', () => {
    assert.equal(mouthSize('toucan'), 'wide');
    assert.equal(mouthSize('ant bear'), 'wide');
    assert.equal(mouthSize('alligator'), 'small');
  });
});
