// Parts of a list

import { assert } from 'chai';

export function partlist (arr: string[]): string[][] {
  const partitions: string[][] = [];
  arr.forEach((_, i) => {
    if (i === 0) {
      return;
    }
    const first = arr.slice(0, i).join(' ');
    const second = arr.slice(i).join(' ');
    partitions.push([first, second]);
  });
  return partitions;
}

function testing (arr:string[], expected:string[][]) {
  assert.deepEqual(partlist(arr), expected);
}

describe('Fixed Tests partlist', function () {
  it('Basic tests', function () {
    testing(['I', 'wish', 'I', "hadn't", 'come'],
      [['I', "wish I hadn't come"], ['I wish', "I hadn't come"], ['I wish I', "hadn't come"], ["I wish I hadn't", 'come']]);
    testing(['cdIw', 'tzIy', 'xDu', 'rThG'],
      [['cdIw', 'tzIy xDu rThG'], ['cdIw tzIy', 'xDu rThG'], ['cdIw tzIy xDu', 'rThG']]);
    testing(['vJQ', 'anj', 'mQDq', 'sOZ'],
      [['vJQ', 'anj mQDq sOZ'], ['vJQ anj', 'mQDq sOZ'], ['vJQ anj mQDq', 'sOZ']]);
    testing(['mkC', 'WoiP', 'pCHh', 'mkv'], [['mkC', 'WoiP pCHh mkv'], ['mkC WoiP', 'pCHh mkv'], ['mkC WoiP pCHh', 'mkv']]);
    testing(['vHW', 'bPq', 'pme', 'jJr', 'HGHV'],
      [['vHW', 'bPq pme jJr HGHV'], ['vHW bPq', 'pme jJr HGHV'], ['vHW bPq pme', 'jJr HGHV'], ['vHW bPq pme jJr', 'HGHV']]);
    testing(['YZd', 'ptUD', 'IXr'], [['YZd', 'ptUD IXr'], ['YZd ptUD', 'IXr']]);
  });
});
