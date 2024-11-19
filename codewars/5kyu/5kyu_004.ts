// Human Readable Time

import { assert } from 'chai';

const TIME_CONVERSION_SEC = [
  {
    name: 'hour',
    unit: 3600
  },
  {
    name: 'min',
    unit: 60
  },
  {
    name: 'second',
    unit: 1
  }
];

export function humanReadable (seconds: number): string {
  let time = [0, 0, 0];
  let rem = seconds;

  time = time.map((_, i) => {
    const conversionFactor = TIME_CONVERSION_SEC[i].unit;
    const placed = Math.floor(rem / conversionFactor);
    rem -= placed * conversionFactor;
    return placed;
  });

  return time.map(time => String(time).padStart(2, '0')).join(':');
}

// Test
describe('examples', function () {
  it('should format correctly', function () {
    assert.equal(humanReadable(0), '00:00:00', 'humanReadable(0)');
    assert.equal(humanReadable(5), '00:00:05', 'humanReadable(5)');
    assert.equal(humanReadable(60), '00:01:00', 'humanReadable(60)');
    assert.equal(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
    assert.equal(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
  });
});
