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
   let arr = [];
  let result = [];

  for (let i = 0; i < expr.length; i += 10) {
    arr.push(expr.slice(i, i + 10));
  }
console.log(arr)
const ar = arr.map(el => el.replace(/00/g, ''))
console.log(ar)
const res = ar.map(el => el.replace(/10/g, '.'))
const resus = res.map(el => el.replace(/11/g, '-'))
const resu = resus.map(el => el.replace('**********', ' '))
console.log(resu)

for(let i = 0; i < resu.length; i++)
for (const [key, value] of Object.entries(MORSE_TABLE)) {
if(resu[i]=== key)
 result.push(`${value}`);
}
const good = result.join('');
return good;  // write your solution here
}

module.exports = {
    decode
}