// Learning TypeScript. Classes & Interfaces. Inheritance

import { expect } from 'chai';

interface IAnimal {
  name: string;
  age: number;
  legs: number;
  species: string;
  status: string;
  introduce: () => string;
}

export class Animal implements IAnimal {
  public name: string;
  public age: number;
  public legs: number;
  public species: string;
  public status: string;

  constructor (name: string, age: number, legs: number, species: string, status: string) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }

  public introduce (): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

export class Shark extends Animal {
  constructor (name: string, age: number, status: string) {
    super(name, age, 0, 'shark', status);
  }
}

export class Cat extends Animal {
  constructor (name: string, age: number, status: string) {
    super(name, age, 4, 'cat', status);
  }

  public introduce (): string {
    return `${super.introduce()}  Meow meow!`;
  }
}

export class Dog extends Animal {
  public master: string;

  constructor (name: string, age: number, status: string, master: string) {
    super(name, age, 4, 'dog', status);
    this.master = master;
  }

  public greetMaster (): string {
    return `Hello ${this.master}`;
  }
}

// Test
describe('The Animal class', () => {
  it('should construct an object properly', () => {
    const octopussy = new Animal('Octopussy', 2, 8, 'octopus', "I'm suffering a sting");
    expect(octopussy.name).to.equal('Octopussy');
    expect(octopussy.age).to.equal(2);
    expect(octopussy.legs).to.equal(8);
    expect(octopussy.species).to.equal('octopus');
    expect(octopussy.status).to.equal("I'm suffering a sting");
    expect(octopussy.introduce()).to.equal('Hello, my name is Octopussy and I am 2 years old.');
  });
});

describe('The Shark class', () => {
  it('should construct an object properly', () => {
    const billy = new Shark('Billy', 3, 'Alive and well');
    expect(billy.name).to.equal('Billy');
    expect(billy.age).to.equal(3);
    expect(billy.legs).to.equal(0);
    expect(billy.species).to.equal('shark');
    expect(billy.status).to.equal('Alive and well');
    expect(billy.introduce()).to.equal('Hello, my name is Billy and I am 3 years old.');
    const charles = new Shark('Charles', 8, 'Finding a mate');
    expect(charles.name).to.equal('Charles');
    expect(charles.age).to.equal(8);
    expect(charles.legs).to.equal(0);
    expect(charles.species).to.equal('shark');
    expect(charles.status).to.equal('Finding a mate');
    expect(charles.introduce()).to.equal('Hello, my name is Charles and I am 8 years old.');
  });
});

describe('The Cat class', () => {
  it('should construct an object properly', () => {
    const cathy = new Cat('Cathy', 7, 'Playing with a ball of yarn');
    expect(cathy.name).to.equal('Cathy');
    expect(cathy.age).to.equal(7);
    expect(cathy.legs).to.equal(4);
    expect(cathy.species).to.equal('cat');
    expect(cathy.status).to.equal('Playing with a ball of yarn');
    expect(cathy.introduce()).to.equal('Hello, my name is Cathy and I am 7 years old.  Meow meow!');
    const spitsy = new Cat('Spitsy', 6, 'sleeping');
    expect(spitsy.name).to.equal('Spitsy');
    expect(spitsy.age).to.equal(6);
    expect(spitsy.legs).to.equal(4);
    expect(spitsy.species).to.equal('cat');
    expect(spitsy.status).to.equal('sleeping');
    expect(spitsy.introduce()).to.equal('Hello, my name is Spitsy and I am 6 years old.  Meow meow!');
  });
});

describe('The Dog class', () => {
  it('should construct an object properly', () => {
    const doug = new Dog('Doug', 12, 'Serving his master', 'Eliza');
    expect(doug.name).to.equal('Doug');
    expect(doug.age).to.equal(12);
    expect(doug.legs).to.equal(4);
    expect(doug.species).to.equal('dog');
    expect(doug.status).to.equal('Serving his master');
    expect(doug.introduce()).to.equal('Hello, my name is Doug and I am 12 years old.');
    expect(doug.greetMaster()).to.equal('Hello Eliza');
  });
});
