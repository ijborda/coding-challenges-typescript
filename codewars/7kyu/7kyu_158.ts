// Genetic Algorithm Series - #1 Generate

import { assert } from 'chai';

export function generate (length: number): string {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return Array.from({ length }).map(_ => +(Math.random() > 0.5)).join('');
}

describe('It should respect the given length', () => {
  it('basic', () => {
    assert.equal(generate(16).length, 16);
    assert.equal(generate(32).length, 32);
    assert.equal(generate(64).length, 64);
  });
});
