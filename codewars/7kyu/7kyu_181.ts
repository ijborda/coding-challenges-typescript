// Ch4113ng3

import { assert } from 'chai';

export function nerdify (txt: string): string {
  return txt
    .replace(/a/gi, '4')
    .replace(/e/gi, '3')
    .replace(/l/g, '1');
}

// Test
describe('nerdify', function () {
  it('Sample Tests', function () {
    assert.strictEqual(nerdify('Fund4m3nt41s'), 'Fund4m3nt41s');
    assert.strictEqual(nerdify('Seven'), 'S3v3n');
    assert.strictEqual(nerdify('Los Angeles'), 'Los 4ng313s');
    assert.strictEqual(nerdify('Seoijselawuue'), 'S3oijs314wuu3');
  });
});
