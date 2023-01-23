// Correct the time-string

import { assert } from 'chai';

export function timeCorrect (timestring: string | null): string | null {
  if (!timestring) {
    return timestring;
  }

  let [hr, mn, sc] = timestring.split(':').map(Number);
  if (!hr || !mn || !sc) {
    return null;
  }

  const MAX_SC = 60;
  const MAX_MN = 60;
  const MAX_HR = 24;

  mn += Math.floor(sc / MAX_SC);
  hr += Math.floor(mn / MAX_MN);

  return formatTime([hr % MAX_HR, mn % MAX_MN, sc % MAX_SC]);
}

const formatTime = (time: number[]): string => {
  return time.map(a => a.toString().padStart(2, '0')).join(':');
};

describe('solution', function () {
  it('Basic Tests', function () {
    assert.equal(timeCorrect('19:99:99'), '20:40:39');
    // Null or Empty
    assert.equal(timeCorrect(null), null);
    assert.equal(timeCorrect(''), '');

    // Invalid Format
    assert.equal(timeCorrect('001122'), null);
    assert.equal(timeCorrect('00;11;22'), null);
    assert.equal(timeCorrect('0a:1c:22'), null);

    // Correction Tests
    assert.equal(timeCorrect('09:10:01'), '09:10:01');
    assert.equal(timeCorrect('11:70:10'), '12:10:10');
    assert.equal(timeCorrect('19:99:09'), '20:39:09');
    assert.equal(timeCorrect('19:99:99'), '20:40:39');
    assert.equal(timeCorrect('24:01:01'), '00:01:01');
    assert.equal(timeCorrect('52:01:01'), '04:01:01');
  });
});
