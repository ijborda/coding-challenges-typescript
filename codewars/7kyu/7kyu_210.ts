// Hëävÿ Mëtäl Ümläüts

import { assert } from 'chai';

export function heavyMetalUmlauts (boringText:string):string {
  const HM = {
    A: 'Ä',
    E: 'Ë',
    I: 'Ï',
    O: 'Ö',
    U: 'Ü',
    Y: 'Ÿ'
  };
  return boringText
    .split('')
    .map(a => {
      if (a.toUpperCase() in HM) {
        const upperOrig = a.toUpperCase();
        const upperHm = HM[upperOrig as keyof typeof HM];
        return a === upperOrig ? upperHm : upperHm.toLowerCase();
      }
      return a;
    }).join('');
}

// Test
describe('solution', function () {
  it('Example tests', function () {
    assert.strictEqual(heavyMetalUmlauts('Announcing the Macbook Air Guitar'), 'Ännöüncïng thë Mäcböök Äïr Güïtär');
    assert.strictEqual(heavyMetalUmlauts('Facebook introduces new heavy metal reaction buttons'), 'Fäcëböök ïntrödücës nëw hëävÿ mëtäl rëäctïön büttöns');
    assert.strictEqual(heavyMetalUmlauts("Strong sales of Google's VR Metalheadsets send tech stock prices soaring"), "Ströng sälës öf Gööglë's VR Mëtälhëädsëts sënd tëch stöck prïcës söärïng");
    assert.strictEqual(heavyMetalUmlauts('Vegan Black Metal Chef hits the big time on Amazon TV'), 'Vëgän Bläck Mëtäl Chëf hïts thë bïg tïmë ön Ämäzön TV');
  });
});
