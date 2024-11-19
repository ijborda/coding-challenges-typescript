// Multiplication - Generators #2

import { assert } from 'chai';

export function * generator (a: number): Generator<string> {
  let b = 1;
  while (true) {
    yield `${a} x ${b} = ${a * b}`;
    b++;
  }
}

// Test
describe('Fixed Tests', () => {
  it('Should generate a simple multiplication list', () => {
    const gen = generator(1);
    assert.strictEqual(gen.next().value, '1 x 1 = 1', '1 x 1 = 1');
    assert.strictEqual(gen.next().value, '1 x 2 = 2', '1 x 2 = 2');
    assert.strictEqual(gen.next().value, '1 x 3 = 3', '1 x 3 = 3');
    assert.strictEqual(gen.next().value, '1 x 4 = 4', '1 x 4 = 4');
    assert.strictEqual(gen.next().value, '1 x 5 = 5', '1 x 5 = 5');
  });
});
