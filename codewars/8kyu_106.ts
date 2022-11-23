// Grasshopper - Personalized Message

import { assert } from 'chai';

export function greet (name: string, owner: string): string {
  enum NameList {
    BOSS = 'boss',
    GUEST = 'guest'
  }
  return `Hello ${name === owner ? NameList.BOSS : NameList.GUEST}`;
}

describe('example', () => {
  it('Fixed test', () => {
    assert.strictEqual(greet('Daniel', 'Daniel'), 'Hello boss');
    assert.strictEqual(greet('Greg', 'Daniel'), 'Hello guest');
  });
});
