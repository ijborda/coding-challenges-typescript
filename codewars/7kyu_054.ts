// Bumps in the Road

import { assert } from 'chai';

export function bump (x: string): string {
  enum Response {
    OK = 'Woohoo!',
    BAD = 'Car Dead'
  }
  const numBumps = (x.match(/n/g) || []).length;
  return numBumps <= 15 ? Response.OK : Response.BAD;
}

describe('Bumps in the Road', () => {
  it('Fixed tests', () => {
    // assert.strictEqual(bump('n'), 'Woohoo!');
    assert.strictEqual(bump('__nn_nnnn__n_n___n____nn__nnn'), 'Woohoo!');
    assert.strictEqual(bump('nnn_n__n_n___nnnnn___n__nnn__'), 'Woohoo!');
    assert.strictEqual(bump('_nnnnnnn_n__n______nn__nn_nnn'), 'Car Dead');
    assert.strictEqual(bump('______n___n_'), 'Woohoo!');
    assert.strictEqual(bump('nnnnnnnnnnnnnnnnnnnnn'), 'Car Dead');
  });
});
