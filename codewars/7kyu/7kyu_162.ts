// Composing squared strings

import { assert } from 'chai';

export function compose (s1: string, s2: string): string {
  const s1Arr = s1.split('\n');
  const s2Arr = s2.split('\n').reverse();
  return s1Arr
    .map((_, i) => s1Arr[i].slice(0, i + 1) + s2Arr[i].slice(0, s1Arr.length - i))
    .join('\n');
}

describe('Fixed Tests', function () {
  it('Basic tests compose', function () {
    assert.strictEqual(
      compose(
        'byGt\nhTts\nRTFF\nCnnI',
        'jIRl\nViBu\nrWOb\nNkTB'
      ),
      'bNkTB\nhTrWO\nRTFVi\nCnnIj'
    );
    assert.strictEqual(
      compose(
        'HXxA\nTGBf\nIPhg\nuUMD',
        'Hcbj\nqteH\nGbMJ\ngYPW'
      ),
      'HgYPW\nTGGbM\nIPhqt\nuUMDH'
    );
    assert.strictEqual(
      compose(
        'tSrJ\nOONy\nsqPF\nxMkB',
        'hLqw\nEZuh\nmYFl\nzlYf'
      ),
      'tzlYf\nOOmYF\nsqPEZ\nxMkBh'
    );
    assert.strictEqual(
      compose(
        'fn\nlr',
        'Kz\nmO'
      ),
      'fmO\nlrK'
    );
    assert.strictEqual(
      compose(
        'fctRKq\nBCorKQ\nZKGbDO\nbhHohe\nUjyNSg\nPCOiuM',
        'elSYAB\nLQMYuN\nTzQtaM\nFutqip\nwSAjZX\nuOPhSJ'
      ),
      'fuOPhSJ\nBCwSAjZ\nZKGFutq\nbhHoTzQ\nUjyNSLQ\nPCOiuMe'
    );
  });
});
