// https://js.checkio.org/mission/speechmodule/

const FIRST_TEN = ["one", "two", "three", "four", "five", "six", "seven",
    "eight", "nine"
  ],
  SECOND_TEN = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
    "sixteen", "seventeen", "eighteen", "nineteen"
  ],
  OTHER_TENS = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy",
    "eighty", "ninety"
  ],
  HUNDRED = "hundred";

function speechModule(number) {
  let number_string = "";
  let hundreds = Math.floor(number / 100);
  let tens = Math.floor((number % 100) / 10);
  let coin = number % 10;
  number_string += hundreds < 1 ? "" : FIRST_TEN[hundreds-1] + " " + HUNDRED + " ";

  if (tens <= 0) 
    number_string += coin < 1 ? "" : FIRST_TEN[coin-1] + " "
  else if (tens === 1) 
    number_string += SECOND_TEN[coin] + " ";
  else 
    number_string += OTHER_TENS[tens-2] + " " + (coin < 1 ? "" : FIRST_TEN[coin-1]) + " ";

  return number_string.trim();
}

console.log(speechModule(4));
console.log(speechModule(133));
console.log(speechModule(12));
console.log(speechModule(101));
console.log(speechModule(212));
console.log(speechModule(40));

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(speechModule(4), 'four', "four");
//   assert.equal(speechModule(133), 'one hundred thirty three', "one hundred thirty three");
//   assert.equal(speechModule(12), 'twelve', "twelve");
//   assert.equal(speechModule(101), 'one hundred one', "one hundred one");
//   assert.equal(speechModule(212), 'two hundred twelve', "two hundred twelve");
//   assert.equal(speechModule(40), 'forty', "forty");
//   console.log("Done! Go and Check IT!");
// }