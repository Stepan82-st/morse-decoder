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
    let result = [];
    const ex = expr.trim();
    const matrixLeter = ex.split('');
    
    for(let i=0; i < matrixLeter.length; i++)
    for (const [key, value] of Object.entries(MORSE_TABLE)){
    if(value === matrixLeter[i])
      result.push((`${key}`));
    }
    const res = [];
    res.push(result.map(function(el) {
    return el.replace(/./g, v => /-/i.test(v)?11:10)
    }))
    
    
    function add(ar){ 
    const arr = [];
    for(let y = 0; y < ar.length; y++)
     arr.push('0'.repeat(10 - ar[y].length)+ar[y]); 
    return arr;
    }
    let teg = [];
    teg.push(res.map(el => add(el)))
      
    return teg.join(' ');  // write your solution here
}

module.exports = {
    decode
}