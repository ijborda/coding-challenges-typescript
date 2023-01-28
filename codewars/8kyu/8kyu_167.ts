// Basic subclasses - Adam and Eve

import { assert } from 'chai';

export class God {
  /**
   * @returns Human[]
   */
  static create () {
    return [new Man(), new Woman()];
  }
}

export abstract class Human {
  /**
   * @returns Human
   */
}

export class Man extends Human {
  /**
   * @returns Man
   */
}

export class Woman extends Human {
  /**
   * @returns Woman
   */
}

describe('solution', function () {
  describe('GodTest', function () {
    it('Adam should be a Man', function () {
      const humans = God.create();
      assert.equal(humans[0] instanceof Man, true, 'Expected Adam to be a Man');
      assert.equal(humans[1] instanceof Woman, true, 'Expected Eve to be a Woman');
      assert.equal(humans[0] instanceof Human, true, 'Expected Adam to be a Human');
      assert.equal(humans[1] instanceof Human, true, 'Expected Eve to be a Human');
    });
  });
});
