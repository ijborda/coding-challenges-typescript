// Decode the Morse code

import { assert } from 'chai';

const MORSE_CODE = {
  '-.-.--': '!',
  '.-..-.': '"',
  '...-..-': '$',
  '.-...': '&',
  '.----.': "'",
  '-.--.': '(',
  '-.--.-': ')',
  '.-.-.': '+',
  '--..--': ',',
  '-....-': '-',
  '.-.-.-': '.',
  '-..-.': '/',
  '-----': '0',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '---...': ':',
  '-.-.-.': ';',
  '-...-': '=',
  '..--..': '?',
  '.--.-.': '@',
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '..--.-': '_',
  '...---...': 'SOS'
};

const CHAR_SEPARATOR = ' ';
const WORD_SEPARATOR = '   ';

export function decodeMorse (morseCode: string): string {
  return morseCode
    .trim()
    .split(WORD_SEPARATOR)
    .map(decodeMorseWord)
    .join(' ');
}

const decodeMorseWord = (word: string): string => {
  return word
    .split(CHAR_SEPARATOR)
    .map(char => MORSE_CODE[char as keyof typeof MORSE_CODE])
    .join('');
};

// Test
const Test = {
  expect: (...args: any[]) => (assert as any)(...args),
  assertEquals: (...args: any[]) => (assert as any).equal(...args)
};

describe('Example from description', function () {
  it('HEY JUDE', () => {
    Test.assertEquals(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE');
  });
});

describe('Your own tests', function () {
  it('Something', () => {
    // your tests
  });
});
