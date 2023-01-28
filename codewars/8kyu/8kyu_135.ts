// Jenny's secret message

import { expect } from 'chai';

export function greet (name:string): string {
  const inLove = ['Johnny'];
  if (inLove.includes(name)) { return 'Hello, my love!'; }
  return 'Hello, ' + name + '!';
}

describe('Jenny\'s greeting function', function () {
  it('should greet some people normally', () => {
    expect(greet('Jim')).to.equal('Hello, Jim!');
    expect(greet('Jane')).to.equal('Hello, Jane!');
    expect(greet('Simon')).to.equal('Hello, Simon!');
  });

  it('should greet Johnny a little bit more special', () => {
    expect(greet('Jim')).to.equal('Hello, Jim!');
  });
});
