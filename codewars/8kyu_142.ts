// Rock Paper Scissors!

import { assert } from 'chai';

export function rps (p1: string, p2: string): string {
  enum Response {
    DRAW = 'Draw!',
    P1 = 'Player 1 won!',
    P2 = 'Player 2 won!',
  }

  if (p1 === p2) {
    return Response.DRAW;
  }

  const rpsBeater = {
    scissors: 'rock',
    rock: 'paper',
    paper: 'scissors'
  };

  return p1 === rpsBeater[p2 as keyof typeof rpsBeater] || undefined ? Response.P1 : Response.P2;
}

describe('Beginner - Lost Without a Map', () => {
  const getMsg = (n: number): string => `Player ${n} won!`;
  it('player 1 win', () => {
    assert.strictEqual(rps('rock', 'scissors'), getMsg(1));
    assert.strictEqual(rps('scissors', 'paper'), getMsg(1));
    assert.strictEqual(rps('paper', 'rock'), getMsg(1));
  });

  it('player 2 win', () => {
    assert.strictEqual(rps('scissors', 'rock'), getMsg(2));
    assert.strictEqual(rps('paper', 'scissors'), getMsg(2));
    assert.strictEqual(rps('rock', 'paper'), getMsg(2));
  });

  it('draw', () => {
    assert.strictEqual(rps('rock', 'rock'), 'Draw!');
    assert.strictEqual(rps('scissors', 'scissors'), 'Draw!');
    assert.strictEqual(rps('paper', 'paper'), 'Draw!');
  });
});
