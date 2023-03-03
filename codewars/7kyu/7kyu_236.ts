// Learning TypeScript. Advanced Types. Union Types

import { expect } from 'chai';

export function join (tokens: string | string[], glue?: string): string {
  if (typeof tokens === 'string') {
    return tokens;
  }
  if (typeof tokens === 'object') {
    return tokens.join(glue);
  }
  throw new Error(`Expected string or string array, got '${tokens}'.`);
}

// Test
describe('join', () => {
  it('should return string as it is', () => {
    expect(join('Hello')).to.equal('Hello');
  });
  it('should return joined string in case of string[]', () => {
    const arr = ['Hello', 'world!'];
    expect(join(arr, ', ')).to.equal('Hello, world!');
  });
});
