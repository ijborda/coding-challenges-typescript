// Decrypt this school cipher

import { assert } from 'chai';
import * as chai from 'chai';

// export const decrypt = (str: string): any => {
//   return (str.match(/('[0-9]+'|[0-9]+|\s)/g) || [])
//     .map(a => Number.isNaN(+a)
//       ? String.fromCharCode(+a.replace(/'/g, ''))
//       : a.split('').reverse().join(''))
//     .reverse()
//     .join('');
// };

// Simplier alternative:
export const decrypt = (str: string): any => {
  return str
    .replace(/'(\d+)'/g, (_, a) => String.fromCharCode(+a))
    .split('')
    .reverse()
    .join('');
};

// Test
chai.config.truncateThreshold = 0;
describe('decrypt', () => {
  it('should decrypt any messages', () => {
    assert.strictEqual(decrypt("4'101''99''105''108''65' '105''72'9"), '9Hi Alice4');
    assert.strictEqual(decrypt("'101''99''105''108''65'"), 'Alice');
    assert.strictEqual(decrypt("'98''111''66'"), 'Bob');
    assert.strictEqual(decrypt('30 71'), '17 03');
  });
});
