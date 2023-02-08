// Trimming a string

import { assert } from 'chai';
import * as chai from 'chai';

export function trim (str: string, size: number): string {
  if (str.length <= size) {
    return str;
  }
  const max = size < 4 ? size : size - 3;
  const concat = str.slice(0, max);
  return `${concat}...`;
}

// Test
chai.config.truncateThreshold = 0;
describe('Sample Tests', () => {
  it('Should pass sample tests', () => {
    assert.strictEqual(trim('Creating kata is fun', 14), 'Creating ka...');
    assert.strictEqual(trim('He', 1), 'H...');
    assert.strictEqual(trim('Code Wars is pretty rad', 50), 'Code Wars is pretty rad');
  });
});
