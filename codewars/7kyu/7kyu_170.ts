// Tetris Series #1 — Scoring System

import { assert } from 'chai';

export function getScore (arr: number[]) {
  let totalLinesCleared = 0;
  return arr.reduce((acc, a) => {
    const currentLevel = Math.floor(totalLinesCleared / 10);
    const currentPoints = acc + getScoreGivenAcc(currentLevel, a);
    totalLinesCleared += a;
    return currentPoints;
  }, 0);
}

const getScoreGivenAcc = (level: number, lines: number): number => {
  switch (true) {
    case lines === 1:
      return 40 * (level + 1);
    case lines === 2:
      return 100 * (level + 1);
    case lines === 3:
      return 300 * (level + 1);
    case lines === 4:
      return 1200 * (level + 1);
    default:
      return 0;
  }
};

// Test
describe('Basic tests', () => {
  const testing = (arr: number[], exp: number) => it(`Testing for [${arr.join(', ')}]`, () => assert.equal(getScore(arr), exp));
  testing([4, 2, 2, 3, 3, 4, 2], 4900);
  testing([0, 1, 2, 3, 4], 1640);
  testing([0, 1, 1, 3, 0, 2, 1, 2], 620);
  testing([2, 0, 4, 2, 2, 3, 0, 0, 3, 3], 3300);
  testing([0], 0);
  testing([], 0);
});
