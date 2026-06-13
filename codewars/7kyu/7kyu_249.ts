// Is Sator Square?

import { assert } from 'chai';

export function isSatorSquare (tablet: string[][]): boolean {
  const dimension = tablet.length;

  // Compute vertical
  const vertical = [];
  for (let i = 0; i < tablet.length; i++) {
    const currentItem = [];
    for (const item of tablet) {
      currentItem.push(item[i]);
    }
    vertical.push(currentItem);
  }

  // Check requirements
  let answer = true;
  for (const currentIndexStr in tablet) {
    const wordIndex = Number(currentIndexStr);
    const reverseIndex = dimension - wordIndex - 1;

    const isOppositeReverse = (new Array(...tablet[wordIndex])).reverse().join('') === tablet[reverseIndex].join('');
    const isVerticalOppositeReverse = (new Array(...vertical[wordIndex])).reverse().join('') === vertical[reverseIndex].join('');
    const isVerticalSame = tablet[wordIndex].join('') === vertical[wordIndex].join('');
    if (!isOppositeReverse || !isVerticalOppositeReverse || !isVerticalSame) {
      answer = false;
      break;
    }
  }
  return answer;
}

// Test:
describe('Fixed Tests', function () {
  const tests = [
    [['T', 'E', 'N'],
      ['E', 'Y', 'E'],
      ['N', 'E', 'T']],

    [['N', 'O', 'T'],
      ['O', 'V', 'O'],
      ['N', 'O', 'T']],

    [['B', 'A', 'T', 'S'],
      ['A', 'B', 'U', 'T'],
      ['T', 'U', 'B', 'A'],
      ['S', 'T', 'A', 'B']],

    [['P', 'A', 'R', 'T'],
      ['A', 'G', 'A', 'R'],
      ['R', 'A', 'G', 'A'],
      ['T', 'R', 'A', 'M']],

    [['S', 'A', 'T', 'O', 'R'],
      ['A', 'R', 'E', 'P', 'O'],
      ['T', 'E', 'N', 'E', 'T'],
      ['O', 'P', 'E', 'R', 'A'],
      ['R', 'O', 'T', 'A', 'S']],

    [['S', 'A', 'L', 'A', 'S'],
      ['A', 'R', 'E', 'N', 'A'],
      ['L', 'E', 'V', 'E', 'L'],
      ['A', 'R', 'E', 'N', 'A'],
      ['S', 'A', 'L', 'A', 'S']]
  ];
  function read (title: string, tablet: string[][], test: number): string {
    return `: ${title} Test Tablet #${test}\n:\n:   ${tablet.map(row => row.join(' ')).join('\n:   ')}\n:\n`;
  }
  for (let i = 0; i < tests.length;) {
    const tablet = tests[i++];
    it(`Tablet ${i}`, () => {
      const expected = !!(i % 2);
      const submitted = isSatorSquare([...tablet]);
      const message = read('Fixed', tablet, i);
      assert.equal(submitted, expected, message);
    });
  }
});
