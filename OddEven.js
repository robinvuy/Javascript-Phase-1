function oddeven(num) {
  if (num % 2 === 0) {
   return `${num} is even`; 
  } else {
    return `${num} is odd`;
  }
};

for (let num = 1 ; num <= 20 ; num++) {
  console.log(oddeven(num));
}

module.exports = oddeven;

// check Leo video as he uses parity