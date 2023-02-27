// Learning TypeScript. Classes & Interfaces. Implement interface methods

import { expect } from 'chai';

interface IGeometricFigure {
  area: () => number;
  perimeter: () => number;
}

export class Square implements IGeometricFigure {
  private side: number;

  constructor (side: number) {
    this.side = side;
  }

  public area (): number {
    return Math.pow(this.side, 2);
  }

  public perimeter (): number {
    return this.side * 4;
  }
}

export class Circle implements IGeometricFigure {
  private radius: number;

  constructor (radius: number) {
    this.radius = radius;
  }

  public area (): number {
    return Math.PI * Math.pow(this.radius, 2);
  }

  public perimeter (): number {
    return 2 * Math.PI * this.radius;
  }
}

// Test
describe('The Square class', () => {
  it('should calculate area and perimeter correctly', () => {
    const square = new Square(1);
    expect(square.area()).to.equal(1);
    expect(square.perimeter()).to.equal(4);
  });
});

describe('The Circle class', () => {
  it('should calculate area and perimeter correctly', () => {
    const circle = new Circle(1);
    expect(circle.area()).to.equal(Math.PI);
    expect(circle.perimeter()).to.equal(2 * Math.PI);
  });
});
