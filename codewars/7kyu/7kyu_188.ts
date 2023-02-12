// Target Date

import { assert } from 'chai';

export function dateNbDays (a0: number, a: number, p: number): string {
  const numDays = Math.ceil(Math.log(a / a0) / Math.log(1 + p / 36000));
  return getDateAfterNumDays('2016-01-01', numDays);
}

const getDateAfterNumDays = (startDate: string, num: number): string => {
  const date = new Date(startDate);
  date.setDate(date.getDate() + num);
  return date.toISOString().split('T')[0];
};

// Test
describe('Fixed Tests dateNbDays', function () {
  it('Basic tests', function () {
    assert.strictEqual(dateNbDays(4281, 5087, 2), '2024-07-03');
    assert.strictEqual(dateNbDays(4620, 5188, 2), '2021-09-19');
    assert.strictEqual(dateNbDays(9999, 11427, 6), '2018-03-13');
    assert.strictEqual(dateNbDays(3525, 4822, 3), '2026-04-18');
    assert.strictEqual(dateNbDays(5923, 6465, 6), '2017-06-10');
    assert.strictEqual(dateNbDays(4254, 4761, 8), '2017-05-22');
    assert.strictEqual(dateNbDays(1244, 2566, 4), '2033-11-04');
    assert.strictEqual(dateNbDays(6328, 7517, 5), '2019-05-25');
    assert.strictEqual(dateNbDays(2920, 3834, 2), '2029-06-03');
    assert.strictEqual(dateNbDays(7792, 8987, 4), '2019-07-09');
  });
});
