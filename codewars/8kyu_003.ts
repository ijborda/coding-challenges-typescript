// Learning TypeScript. Basic Types

import { expect } from 'chai';

const var1Boolean = true;
const var2Decimal = 13;
const var3Hex = 0xf00d;
const var4Binary = 0b111111;
const var5Octal = 0o744;

const var6String = 'Hello, world!';

const var7Array = [1, 'test', { a: 3 }, 4, 5];
const var8NumericArray = [1, 2, 3, 4, 5];

const var9Tuple = ['key', 12345];

enum Color { Red = 1, Green = 2, Blue = 4 }
const var10Enum = Color.Blue;

const var11ArrayOfAny = [1, 'test', { a: 3 }, 4, 5];

const var12VoidFunction = ():void => { /* */ };

const var13Null = null;

const var14Undefined = undefined;

const var15NeverFunction = () => { throw Error(); };

// Test
describe('Checking variables', () => {
  it('var1Boolean should be equal to true', () => {
    expect(var1Boolean).to.equal(true);
  });
  it('var2Decimal should be equal to 13', () => {
    expect(var2Decimal).to.equal(13);
  });
  it('var3Hex should be equal to 0xf00d', () => {
    expect(var3Hex).to.equal(0xf00d);
  });
  it('var4Binary should be equal to 0b111111', () => {
    expect(var4Binary).to.equal(0b111111);
  });
  it('var5Octal should be equal to 0o744', () => {
    expect(var5Octal).to.equal(0o744);
  });
  it("var6String should be equal to 'Hello, world!'", () => {
    expect(var6String).to.equal('Hello, world!');
  });
  it("var7Array should be equal to [1, 'test', {a: 3}, 4, 5]", () => {
    expect(var7Array).to.deep.equal([1, 'test', { a: 3 }, 4, 5]);
  });
  it('var8NumericArray should be equal to [1, 2, 3, 4, 5]', () => {
    expect(var8NumericArray).to.deep.equal([1, 2, 3, 4, 5]);
  });
  it("var9Tuple should be equal to ['key', 12345]", () => {
    expect(var9Tuple).to.deep.equal(['key', 12345]);
  });
  it('var10Enum should be equal to Color.Blue', () => {
    expect(var10Enum).to.equal(Color.Blue);
  });
  it("var11ArrayOfAny should be equal to [1, 'test', {a: 3}, 4, 5]", () => {
    expect(var11ArrayOfAny).to.deep.equal([1, 'test', { a: 3 }, 4, 5]);
  });
  it('var12VoidFunction should be void function', () => {
    expect(typeof (var12VoidFunction)).to.equal('function');
    expect(var12VoidFunction()).to.equal(undefined);
  });
  it('var13Null should be equal to null', () => {
    expect(var13Null).to.equal(null);
  });
  it('var14Undefined should be equal to undefined', () => {
    expect(var14Undefined).to.equal(undefined);
  });
  it('var15NeverFunction should be never function', () => {
    expect(typeof (var15NeverFunction)).to.equal('function');
    try {
      expect(var15NeverFunction()).to.equal(undefined);
    } catch (e) {
    }
  });
});
