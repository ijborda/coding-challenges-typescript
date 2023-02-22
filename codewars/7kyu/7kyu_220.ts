// Turn the Mars rover to take pictures

import { assert } from 'chai';

type MoveDirection = 'left' | 'right';
type Direction = 'N' | 'S' | 'E' | 'W';

export function turn (current: Direction, target: Direction): MoveDirection {
  enum Turn {
    RIGHT = 'right',
    LEFT = 'left'
  }
  const DIRECTION = ['N', 'E', 'S', 'W'];

  const nextDirection = DIRECTION[(DIRECTION.indexOf(current) + 1) % DIRECTION.length];
  return nextDirection === target ? Turn.RIGHT : Turn.LEFT;
}

// Test
describe('turn', () => {
  describe('facing N', () => {
    it('should turn right to face E', () => {
      const actual = turn('N', 'E');
      const expected = 'right';

      assert.equal(actual, expected);
    });
  });

  describe('facing S', () => {
    it('should turn left to face E', () => {
      const actual = turn('S', 'E');
      const expected = 'left';

      assert.equal(actual, expected);
    });
  });

  describe('facing W', () => {
    it('should turn right to face N', () => {
      const actual = turn('W', 'N');
      const expected = 'right';

      assert.equal(actual, expected);
    });
  });
});
