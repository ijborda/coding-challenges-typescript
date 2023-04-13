// Moves in squared strings (II)

import { assert } from 'chai';

export function rot (s: string): string {
  return s
    .split('\n')
    .reverse()
    .map(sub => sub.split('').reverse().join(''))
    .join('\n');
}

export function selfieAndRot (s: string): string {
  const part1 = s.split('\n').map(sub => sub + '.'.repeat(sub.length)).join('\n');
  const part2 = rot(s).split('\n').map(sub => '.'.repeat(sub.length) + sub).join('\n');
  return [part1, part2].join('\n');
}

export function oper (fn: (s: string) => string, s: string): string {
  return fn(s);
}

// Test
describe('Fixed Tests', function () {
  it('Basic tests rot', function () {
    assert.strictEqual(
      rot('fijuoo\nCqYVct\nDrPmMJ\nerfpBA\nkWjFUG\nCVUfyL'),
      'LyfUVC\nGUFjWk\nABpfre\nJMmPrD\ntcVYqC\nooujif'
    );
    assert.strictEqual(
      selfieAndRot('xZBV\njsbS\nJcpN\nfVnP'),
      'xZBV....\njsbS....\nJcpN....\nfVnP....\n....PnVf\n....NpcJ\n....Sbsj\n....VBZx'
    );
  });

  it('Basic tests rot', function () {
    assert.strictEqual(
      oper(rot, 'fijuoo\nCqYVct\nDrPmMJ\nerfpBA\nkWjFUG\nCVUfyL'),
      'LyfUVC\nGUFjWk\nABpfre\nJMmPrD\ntcVYqC\nooujif'
    );
    assert.strictEqual(
      oper(rot, 'rkKv\ncofM\nzXkh\nflCB'),
      'BClf\nhkXz\nMfoc\nvKkr'
    );
  });

  it('Basic tests selfieAndRot', function () {
    assert.strictEqual(
      oper(selfieAndRot, 'xZBV\njsbS\nJcpN\nfVnP'),
      'xZBV....\njsbS....\nJcpN....\nfVnP....\n....PnVf\n....NpcJ\n....Sbsj\n....VBZx'
    );
    assert.strictEqual(
      oper(selfieAndRot, 'uLcq\nJkuL\nYirX\nnwMB'),
      'uLcq....\nJkuL....\nYirX....\nnwMB....\n....BMwn\n....XriY\n....LukJ\n....qcLu'
    );
  });
});
