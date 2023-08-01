const MORSE_TABLE = {
  '.-':     'a',
  '-...':   'b',
  '-.-.':   'c',
  '-..':    'd',
  '.':      'e',
  '..-.':   'f',
  '--.':    'g',
  '....':   'h',
  '..':     'i',
  '.---':   'j',
  '-.-':    'k',
  '.-..':   'l',
  '--':     'm',
  '-.':     'n',
  '---':    'o',
  '.--.':   'p',
  '--.-':   'q',
  '.-.':    'r',
  '...':    's',
  '-':      't',
  '..-':    'u',
  '...-':   'v',
  '.--':    'w',
  '-..-':   'x',
  '-.--':   'y',
  '--..':   'z',
  '.----':  '1',
  '..---':  '2',
  '...--':  '3',
  '....-':  '4',
  '.....':  '5',
  '-....':  '6',
  '--...':  '7',
  '---..':  '8',
  '----.':  '9',
  '-----':  '0',
};

function decode(expr) {
  let morseSymbol = '';
  let messageEncoded = '';

  for(let i = 0; i < expr.length; i += 10) {
    let letterBinary = expr.slice(i, i + 10);

    for(let j = 0; j < letterBinary.length; j += 2) {
      if(letterBinary === '**********') {
        messageEncoded += ' ';
        break;
      }

      let symbol = letterBinary.slice(j, j + 2);

      switch(symbol) {
        case '10':
          morseSymbol += '.';
          break;
        case '11':
          morseSymbol += '-';
          break;
      }

      if(j === letterBinary.length - 2) {
        for(let symbol in MORSE_TABLE) {
          if(symbol === morseSymbol) {
            messageEncoded += MORSE_TABLE[symbol];
            morseSymbol = '';
          }
        }
      }
    }
  }

	return messageEncoded;
}

module.exports = {
  decode
}