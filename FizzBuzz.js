function fizzbuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  } else if (num % 3 === 0) {
    return 'Fizz';
  } else if (num % 5 === 0) {
    return 'Buzz';
  } else {  
    return num; 
}
}

function fizzbuzzUntil(number) {
  for (let i = 1 ; i <= number ; i++) {
    console.log(fizzbuzz(i));
  }
}

module.exports = {fizzbuzz, fizzbuzzUntil};

// in terminal you need to require like this:
// const {fizzbuzz, fizzbuzzUntil} = require('./fizzbuzz');



