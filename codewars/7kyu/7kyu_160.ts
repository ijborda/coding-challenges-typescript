// Ninja vs Samurai: Strike

import { assert } from 'chai';

export class Warrior {
  private name: string;
  public health: number;

  constructor (name: string) {
    this.name = name;
    this.health = 100;
  }

  strike (enemy: Warrior, swings: number) {
    enemy.health = Math.max(0, enemy.health - (swings * 10));
  }
}

// Alternative Solution: Class Extension
// export class Warrior {
//   private name: string;
//   public health: number;
//   public strike: any;
//   constructor (name: string) { this.name = name; this.health = 100; }
// }
// Warrior.prototype.strike = function (enemy: Warrior, swings: number) {
//   enemy.health = Math.max(0, enemy.health - (swings * 10));
// };

describe('solution', function () {
  it('Basic tests', function () {
    const ninja = new Warrior('Ninja');
    const samurai = new Warrior('Samurai');

    samurai.strike(ninja, 4);
    assert.strictEqual(ninja.health, 60, "Ninja's health is not correct");
  });
});
