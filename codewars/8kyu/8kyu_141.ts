// Playing with cubes II

import { expect } from 'chai';

export class Cube {
  private _side: number;

  constructor (numSides = 0) {
    this._side = Math.abs(numSides);
  }

  public getSide (): number {
    return this._side;
  }

  public setSide (value: number) {
    this._side = Math.abs(value);
  }
}

describe('Cube', () => {
  it('constructs a cube with side s if positive s is passed', () => {
    const cube = new Cube(12);
    expect(cube.getSide()).to.equal(12);
    cube.setSide(42);
    expect(cube.getSide()).to.equal(42);
  });
});
