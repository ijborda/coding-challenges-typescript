// Street Fighter 2 - Character Selection

import chai, { assert } from 'chai';

type Move = 'down'|'up'|'right'|'left';

export function streetFighterSelection (fighters: string[][], position: number[], moves: Move[]): string[] {
  const rowLen = fighters.length;
  const colLen = fighters[0].length;
  const chars: string[] = [];
  let [row, col] = position;

  moves.forEach(move => {
    switch (move) {
      case 'up':
        row = Math.max(0, row - 1);
        break;
      case 'down':
        row = Math.min(rowLen - 1, row + 1);
        break;
      case 'right':
        col = (col + 1) % colLen;
        break;
      case 'left':
        col = col - 1 < 0 ? colLen - 1 : col - 1;
        break;
      default:
        break;
    }
    chars.push(fighters[row][col]);
  });

  return chars;
}

// Test
chai.config.truncateThreshold = 0;
const fighters: string[][] = [
  ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
  ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison']
];
let moves:Move[] = [];

describe('Testing...', function () {
  it('should work with few moves', function () {
    moves = ['up', 'left', 'right', 'left', 'left'];
    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']);
  });

  it('should work with no selection cursor moves', function () {
    moves = [];
    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), []);
  });

  it('should work when always moving left', function () {
    moves = ['left', 'left', 'left', 'left', 'left', 'left', 'left', 'left'];
    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), ['Vega', 'Balrog', 'Guile', 'Blanka', 'E.Honda', 'Ryu', 'Vega', 'Balrog']);
  });

  it('should work when always moving right', function () {
    moves = ['right', 'right', 'right', 'right', 'right', 'right', 'right', 'right'];
    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), ['E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega', 'Ryu', 'E.Honda', 'Blanka']);
  });

  it('should use all 4 directions clockwise twice', function () {
    moves = ['up', 'left', 'down', 'right', 'up', 'left', 'down', 'right'];
    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), ['Ryu', 'Vega', 'M.Bison', 'Ken', 'Ryu', 'Vega', 'M.Bison', 'Ken']);
  });

  it('should work when always moving down', function () {
    moves = ['down', 'down', 'down', 'down'];
    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), ['Ken', 'Ken', 'Ken', 'Ken']);
  });

  it('should work when always moving up', function () {
    moves = ['up', 'up', 'up', 'up'];
    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), ['Ryu', 'Ryu', 'Ryu', 'Ryu']);
  });
});
