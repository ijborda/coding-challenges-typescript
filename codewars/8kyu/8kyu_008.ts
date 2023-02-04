// Learning TypeScript. Basic Types. Type Assertions

import { expect } from 'chai';

export class SuccessServerResult {
  // eslint-disable-next-line no-useless-constructor, @typescript-eslint/ban-types
  constructor (public httpCode: number, public resultObject: Object) {}
}

export class ErrorServerResult {
  // eslint-disable-next-line no-useless-constructor
  constructor (public httpCode: number, public message:string) {}
}

export function getResult (result: SuccessServerResult) {
  if (result.httpCode === 200) {
    return result.resultObject;
  } else {
    return (result as any as ErrorServerResult).message;
  }
}

describe('getResult', () => {
  it('should return correct results for SuccessServerResult', () => {
    const message = { message: 'Hello, world!' };
    const success = new SuccessServerResult(200, message);
    expect(getResult(success)).to.deep.equal(message);
  });
  it('should return correct results for ErrorServerResult', () => {
    const message = 'Not found';
    const error = new ErrorServerResult(404, message);
    expect(getResult(error as any)).to.equal(message);
  });
});
