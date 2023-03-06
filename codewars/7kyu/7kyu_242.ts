// Anchorize me!

import { assert } from 'chai';
import * as chai from 'chai';

export function anchorize (text:string) {
  const links = text.match(/(http|https|ftp|ftps|file|smb):\/\/[^\s]+/gi) || [];
  Array.from(new Set(links)).forEach(link => {
    const regex = new RegExp(link, 'gi');
    text = text.replace(regex, `<a href="${link}">${link}</a>`);
  });
  return text;
}

// Alternative
// export function anchorize (text:string) {
//   return text.replace(/((http|https|ftp|ftps|file|smb):\S+)/gi, '<a href="$1">$1</a>');
// }

// Test
chai.config.truncateThreshold = 0;
describe('Basic tests', function () {
  it('Should return anchorized samples', function () {
    // assert.strictEqual('<xmp>' + anchorize('hello http://world.com !') + '</xmp>', '<xmp>' + 'hello <a href="http://world.com">http://world.com</a> !' + '</xmp>');
    assert.strictEqual(anchorize('hello http://world.com ! hello http://world.com !'), 'hello <a href="http://world.com">http://world.com</a> ! hello <a href="http://world.com">http://world.com</a> !');
  });
});
