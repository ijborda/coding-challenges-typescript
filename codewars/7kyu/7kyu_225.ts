// Truthy and Falsy

import { assert } from 'chai';

class Present {
  private str: string;
  private passes: number;

  constructor (str: string, passes: number) {
    this.str = str;
    this.passes = passes;
  }

  public response (): string {
    switch (this.str) {
      case 'goodpresent':
        return this.goodpresent();
      case 'bang':
        return this.bang();
      case 'badpresent':
        return this.badpresent();
      case 'dog':
        return this.dog();
      default:
        return this.default();
    }
  }

  private goodpresent (): string {
    return this.str
      .split('')
      .map(a => String.fromCharCode(this.passes + a.charCodeAt(0)))
      .join('');
  }

  private bang (): string {
    return this.str
      .split('')
      .reduce((acc, a) => acc + (a.charCodeAt(0) - this.passes), 0)
      .toString();
  }

  private badpresent (): string {
    return 'Take this back!';
  }

  private dog (): string {
    return `pass out from excitement ${this.passes} times`;
  }

  private default (): string {
    return this.str
      .split('')
      .sort()
      .join('');
  }
}

export function present (x: string, y: number): string {
  return new Present(x, y).response();
}

// Test
describe('Birthday II - Presents', () => {
  it('Fixed tests', () => {
    assert.strictEqual(present('badpresent', 3), 'Take this back!');
    assert.strictEqual(present('goodpresent', 9), 'pxxmy{n|nw}');
    assert.strictEqual(present('crap', 10), 'acpr');
  });
});
