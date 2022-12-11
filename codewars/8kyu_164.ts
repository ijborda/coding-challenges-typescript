// The falling speed of petals

import { assert } from 'chai';

export function sakuraFall (v: number): number {
  let time = 0;
  const height = 400;

  if (v <= 0) {
    return time;
  }

  time = height / v;

  return time;
}

describe('Basic tests', () => {
  it('Should pass basic tests', () => {
    assert.approximately(sakuraFall(5), 80, 1e-9);
    assert.approximately(sakuraFall(10), 40, 1e-9);
    assert.approximately(sakuraFall(200), 2, 1e-9);
    assert.approximately(sakuraFall(-1), 0, 1e-9);
    assert.approximately(sakuraFall(0), 0, 1e-9);
  });
});
