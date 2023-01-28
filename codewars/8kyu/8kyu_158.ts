// A Needle in the Haystack

import { assert } from 'chai';

export function finalGrade (exam: number, projects: number): number {
  let finalGrade: number;

  if (exam > 90 || projects > 10) {
    finalGrade = 100;
  } else if (exam > 75 && projects > 4) {
    finalGrade = 90;
  } else if (exam > 50 && projects > 1) {
    finalGrade = 75;
  } else {
    finalGrade = 0;
  }

  return finalGrade;
}

describe("Student's Final Grade", () => {
  it('Fixed tests', () => {
    assert.strictEqual(finalGrade(100, 12), 100);
    assert.strictEqual(finalGrade(85, 5), 90);
  });
});
