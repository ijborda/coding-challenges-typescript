// Help Suzuki count his vegetables....

import { assert } from 'chai';
import * as chai from 'chai';

export function countVegetables (s:string): [number, string][] {
  const VEG = ['cabbage', 'carrot', 'celery', 'cucumber', 'mushroom', 'onion', 'pepper', 'potato', 'tofu', 'turnip'];

  const counts = s.split(' ').reduce((acc, a) => {
    if (VEG.includes(a)) {
      if (a in acc) {
        acc[a] += 1;
      } else {
        acc[a] = 1;
      }
    }
    return acc;
  }, {} as {[key: string]: number});

  const countsArr = Object.entries(counts).sort((a, b) => {
    if (a[1] === b[1]) {
      return b[0].localeCompare(a[0]);
    }
    return b[1] - a[1];
  }).map(a => a.reverse() as [number, string]);

  return countsArr;
}

// Test
chai.config.truncateThreshold = 0;
describe('Tests', function () {
  it('Basic Tests', function () {
    const lst1 = [[2, 'tofu'], [2, 'potato'], [2, 'cucumber'], [2, 'cabbage'], [1, 'turnip'], [1, 'pepper'], [1, 'onion'], [1, 'mushroom'], [1, 'celery'], [1, 'carrot']];
    const s1 = 'potato tofu cucumber cabbage turnip pepper onion carrot celery mushroom potato tofu cucumber cabbage';
    assert.deepEqual(countVegetables(s1), lst1);
    const lst2 = [[15, 'turnip'], [15, 'mushroom'], [13, 'cabbage'], [10, 'carrot'], [9, 'potato'], [7, 'onion'], [6, 'tofu'], [6, 'pepper'], [5, 'cucumber'], [4, 'celery']];
    const s2 = 'mushroom chopsticks chopsticks turnip mushroom carrot mushroom cabbage mushroom carrot tofu pepper cabbage potato cucumber ' +
             'mushroom mushroom mushroom potato turnip chopsticks cabbage celery celery turnip pepper chopsticks potato potato onion cabbage cucumber ' +
             'onion pepper onion cabbage potato tofu carrot cabbage cabbage turnip mushroom cabbage cabbage cucumber cabbage chopsticks turnip pepper ' +
             'onion pepper onion mushroom turnip carrot carrot tofu onion tofu chopsticks chopsticks chopsticks mushroom cucumber chopsticks carrot ' +
             'potato cabbage cabbage carrot mushroom chopsticks mushroom celery turnip onion carrot turnip cucumber carrot potato mushroom turnip ' +
             'mushroom cabbage tofu turnip turnip turnip mushroom tofu potato pepper turnip potato turnip celery carrot turnip';
    assert.deepEqual(countVegetables(s2), lst2);
  });
});
