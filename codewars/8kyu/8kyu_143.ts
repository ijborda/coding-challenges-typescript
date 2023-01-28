// L1: Set Alarm

import { assert } from 'chai';

export function setAlarm (employed: boolean, vacation: boolean) {
  return employed && !vacation;
}

describe('Tests', function () {
  it('setAlarm(true, true)', () => assert.strictEqual(setAlarm(true, true), false));
  it('setAlarm(false, true)', () => assert.strictEqual(setAlarm(false, true), false));
  it('setAlarm(true, false)', () => assert.strictEqual(setAlarm(true, false), true));
  it('setAlarm(false, false)', () => assert.strictEqual(setAlarm(false, false), false));
});
