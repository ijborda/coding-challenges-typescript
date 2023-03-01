// Learning TypeScript. Classes & Interfaces. Getters

import { expect } from 'chai';

export class Cuboid {
  public length: number;
  public width: number;
  public height: number;

  constructor (length: number, width: number, height: number) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  get surfaceArea (): number {
    return (2 * this.length * this.width) + (2 * this.length * this.height) + (2 * this.height * this.width);
  }

  get volume (): number {
    return this.length * this.width * this.height;
  }
}

export class Cube extends Cuboid {
  constructor (side: number) {
    super(side, side, side);
  }
}

// Test
describe('class Cuboid', () => {
  it('should initialize properly and have working getters', () => {
    const cuboid = new Cuboid(1, 2, 3);
    expect(cuboid.length).to.equal(1);
    expect(cuboid.width).to.equal(2);
    expect(cuboid.height).to.equal(3);
    expect(cuboid.volume).to.equal(6);
    expect(cuboid.surfaceArea).to.equal(22);
    cuboid.length = 4;
    expect(cuboid.volume).to.equal(24);
    expect(cuboid.surfaceArea).to.equal(52);
    cuboid.width = 5;
    expect(cuboid.volume).to.equal(60);
    expect(cuboid.surfaceArea).to.equal(94);
    cuboid.height = 6;
    expect(cuboid.volume).to.equal(120);
    expect(cuboid.surfaceArea).to.equal(148);
    [cuboid.length, cuboid.width, cuboid.height] = [7, 8, 9];
    expect(cuboid.volume).to.equal(504);
    expect(cuboid.surfaceArea).to.equal(382);
  });
});

describe('class Cube extends Cuboid', () => {
  it('should initialize properly and have the same getters as the parent class', () => {
    const cube = new Cube(1);
    expect(cube.length).to.equal(1);
    expect(cube.width).to.equal(1);
    expect(cube.height).to.equal(1);
    expect(cube.volume).to.equal(1);
    expect(cube.surfaceArea).to.equal(6);
    cube.length = cube.width = cube.height = 2;
    expect(cube.volume).to.equal(8);
    expect(cube.surfaceArea).to.equal(24);
    cube.length = cube.width = cube.height = 3;
    expect(cube.volume).to.equal(27);
    expect(cube.surfaceArea).to.equal(54);
    cube.length = cube.width = cube.height = 5;
    expect(cube.volume).to.equal(125);
    expect(cube.surfaceArea).to.equal(150);
    cube.length = cube.width = cube.height = 10;
    expect(cube.volume).to.equal(1000);
    expect(cube.surfaceArea).to.equal(600);
  });
});
