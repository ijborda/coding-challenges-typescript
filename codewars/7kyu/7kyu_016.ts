// Printer Errors

import { assert } from 'chai';

export function printerError (s: string): string {
  const errors = (s.match(/[n-z]/g) || '').length;
  const total = s.length;
  return `${errors}/${total}`;
}

function testing (s:string, expected:string) {
  assert.strictEqual(printerError(s), expected);
}

describe('Fixed Tests printerError', function () {
  it('Basic tests', function () {
    let s = 'aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz';
    testing(s, '3/56');
    s = 'kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz';
    testing(s, '6/60');
    s = 'kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyzuuuuu';
    testing(s, '11/65');
  });
});
