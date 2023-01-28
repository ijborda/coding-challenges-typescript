// Moves in squared strings (I)

import { assert } from 'chai';

export function vertMirror (strng: string) {
  return strng.split('\n').map(a => a.split('').reverse().join('')).join('\n');
}
export function horMirror (strng: string) {
  return strng.split('\n').reverse().join('\n');
}
export function oper (fct: (s: string) => string, s: string) {
  return fct(s);
}

describe('Fixed Tests', function () {
  it('Basic tests vertMirror', function () {
    assert.strictEqual(oper(vertMirror, 'hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu'), 'QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw');
  });

  it('Basic tests horMirror', function () {
    assert.strictEqual(oper(horMirror, 'lVHt\nJVhv\nCSbg\nyeCt'), 'yeCt\nCSbg\nJVhv\nlVHt');
  });
});
