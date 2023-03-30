// Statistics for an Athletic Association

import { assert } from 'chai';

export const stat = (s: string): string => {
  if (!s.length) {
    return '';
  }
  const timesOnSec = s
    .split(', ')
    .map(time => time
      .split('|')
      .reduce((acc, a, i) => acc + (+a * Math.pow(60, 2 - i)), 0))
    .sort((a, b) => b - a);
  const range = `Range: ${formatSec(calcRange(timesOnSec))}`;
  const average = `Average: ${formatSec(calcAverage(timesOnSec))}`;
  const median = `Median: ${formatSec(calcMedian(timesOnSec))}`;
  return [range, average, median].join(' ');
};

const formatSec = (time: number): string => {
  const hrs = Math.floor((time % Math.pow(60, 3)) / Math.pow(60, 2));
  const min = Math.floor((time % Math.pow(60, 2)) / Math.pow(60, 1));
  const sec = Math.floor((time % Math.pow(60, 1)) / Math.pow(60, 0));
  return [hrs, min, sec].map(t => t.toString().padStart(2, '0')).join('|');
};

const calcRange = (timeArr: number[]): number => {
  return Math.max(...timeArr) - Math.min(...timeArr);
};

const calcAverage = (timeArr: number[]): number => {
  return timeArr.reduce((acc, a) => acc + a) / timeArr.length;
};

const calcMedian = (timeArr: number[]): number => {
  const midIndex = Math.floor(timeArr.length / 2);
  return timeArr.length % 2 ? timeArr[midIndex] : (timeArr[midIndex] + timeArr[midIndex - 1]) / 2;
};

// Test
function dotest (strg:string, expected:string) {
  assert.equal(stat(strg), expected);
}

describe('Fixed Tests', function () {
  it('stat', function () {
    dotest('01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17',
      'Range: 01|01|18 Average: 01|38|05 Median: 01|32|34');
    dotest('02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41',
      'Range: 00|31|17 Average: 02|26|18 Median: 02|22|00');
    dotest('02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|32|34, 2|17|17',
      'Range: 00|31|17 Average: 02|27|10 Median: 02|24|57');
  });
});
