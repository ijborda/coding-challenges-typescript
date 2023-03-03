// Learning TypeScript. Mixins

import { expect } from 'chai';

export class Serializable {
  serialize (): string {
    return JSON.stringify(this);
  }

  deserialize (source: string): void {
    Object.assign(this, JSON.parse(source));
  }
}

// Test
function applyMixins (derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
}

class Person implements Serializable {
  constructor (public firstName?: string, public lastName?: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  serialize!: () => string;
  deserialize!: (source: string) => void;
}

applyMixins(Person, [Serializable]);

describe('Person', () => {
  it('should serialize/deserialize correctly', () => {
    const sourcePerson = new Person('John', 'Galt');
    const serializedPerson = sourcePerson.serialize();
    const resultPerson = new Person();
    resultPerson.deserialize(serializedPerson);
    expect(resultPerson.firstName).to.equal('John');
    expect(resultPerson.lastName).to.equal('Galt');
  });
});
