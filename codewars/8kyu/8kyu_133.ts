// Capitalization and Mutability

import { assert } from 'chai';

export function capitalizeWord (word: string): string {
  return word[0].toUpperCase() + word.substring(1, word.length).toLowerCase();
}

describe('Capitalization and Mutability', function () {
  it('Fixed Tests', function () {
    assert.strictEqual(capitalizeWord('word'), 'Word');
    assert.strictEqual(capitalizeWord('i'), 'I');
    assert.strictEqual(capitalizeWord('glasswear'), 'Glasswear');
  });
});
