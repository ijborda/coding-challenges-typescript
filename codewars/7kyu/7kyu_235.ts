// Learning TypeScript. Classes & Interfaces. Abstract classes

import { expect } from 'chai';

export abstract class Animal {
  /** @param {number} value The length of the animal in parrots. */
  protected constructor (public value: number) {
    this.value = value;
  }

  convertTo (someone: Animal): number {
    return (1 / this.value) * (someone.value);
  }
}

export class Boa extends Animal {
  constructor () {
    super(1 / 38);
  }
}

export class Parrot extends Animal {
  constructor () {
    super(1);
  }
}

export class Monkey extends Animal {
  constructor () {
    super(5 / 38);
  }
}

// Test
describe('Boa', () => {
  it('should be measured in Monkeys correctly', () => {
    const boa = new Boa();
    const monkey = new Monkey();
    expect(boa.convertTo(monkey)).to.equal(5);
  });
  it('should be measured in Parrots correctly', () => {
    const boa = new Boa();
    const parrot = new Parrot();
    expect(boa.convertTo(parrot)).to.equal(38);
  });
});
