// Simple Fun #74: Growing Plant

import { assert } from 'chai';

export function growingPlant (up: number, down: number, h: number): number {
  const net = up - down;
  const initialGuess = Math.max(Math.ceil((h - up) / net), 0);

  if (getHeight(initialGuess, up, down) >= h) {
    return initialGuess;
  }
  return initialGuess + 1;
  // ALTERNATIVE:
  // return Math.max(Math.ceil((h - down) / (up - down)), 1);
}

const getHeight = (number: number, up: number, down: number): number => {
  const net = up - down;
  if (Number.isInteger(number)) {
    return net * number;
  }
  return net * number + up;
};

describe('basic tests', function () {
  it('growingPlant(100, 10, 910)', () => assert.strictEqual(growingPlant(100, 10, 910), 10));
  it('growingPlant(10, 9, 4)', () => assert.strictEqual(growingPlant(10, 9, 4), 1));
  it('growingPlant(5, 2, 5)', () => assert.strictEqual(growingPlant(5, 2, 5), 1));
  it('growingPlant(5, 2, 6)', () => assert.strictEqual(growingPlant(5, 2, 6), 2));
  it('growingPlant(39, 32, 76', () => assert.strictEqual(growingPlant(39, 32, 76), 7));
});
