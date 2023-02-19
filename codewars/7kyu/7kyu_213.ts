// Do you know how to make Query String?

import { assert } from 'chai';

export const toQueryString = (obj: object): string => {
  return Object.entries(obj)
    .map(qs => {
      const param = qs[0];
      const value = qs[1];
      if (typeof value === 'object' && value.length) {
        return value.map((val: string) => `${param}=${val}`).join('&');
      }
      return `${param}=${value}`;
    })
    .join('&');
};

// Test
describe('toQueryString', () => {
  it('should stringify some objects', () => {
    assert.strictEqual(
      toQueryString({ foo: 1, bar: 2 }),
      'foo=1&bar=2'
    );
  });

  it('should stringify array values too', () => {
    assert.strictEqual(
      toQueryString({ foo: [1, 3], bar: [2, 4] }),
      'foo=1&foo=3&bar=2&bar=4'
    );
  });

  it('should stringify not only foo and bar', () => {
    assert.strictEqual(
      toQueryString({ a: 'Z', b: 'Y', c: 'X', d: 'W', e: 'V', f: 'U', g: 'T' }),
      'a=Z&b=Y&c=X&d=W&e=V&f=U&g=T'
    );
  });
});
