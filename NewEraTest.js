// Imports
const io = require('console-read-write');
const prompts = require('prompts');


/**
  * @desc swap 2 chr in a string
  * @param1 number
  * @param2 string
  * @param3 string
  * @return string 
*/
String.prototype.swap = function (index, chr1, chr2) {
  return this.substr(0, index) + chr2 + chr1 + this.substr(index + 2);
}

/**
  * @desc Finding the next higher number
  * @param void $msg - Please type a number:
  * @return void - success or failure
  * @exampel if the given number is 1234, the next higher number with the same digits is 1243.
*/

async function ex1() {
  io.write('Please type a number:');
  var num = await io.read();
  var n = num.toString();
  var found = false;
  i = n.length - 1;
  while (!found && i > 0) {
    if (n[i] > n[i - 1]) {
      found = true;
      n = n.swap(i - 1, n[i - 1], n[i])
      io.write(n)
    }
    i--;
  }
  if (!found) {
    io.write('There is no such number!');
  }
}


/**
  * @desc Shopping sytem that produces the total cost
  * @param void $msg - Please type a list of products:(between each two items it you should insert ", ")
  * @return void 
  * @exampel Apple, Apple, Orange, Apple => 3.05 $
*/

async function ex2() {
  io.write('Please type a list of products:');
  var x = await io.read();
  var list = x.split(", ");
  price = {
    'Apple': 0.6,
    'Orange': 1.25
  }
  var total = 0;
  for (let i = 0; i < list.length; i++) {
    total += price[list[i]];
  }

  io.write(total.toFixed(2) + '$');
}


/**
  * @desc Main function to choose which function to execurte
  * @param void $prompt
  * @return void 
*/

async function main() {
  const response = await prompts({
    type: 'select',
    name: 'value',
    message: 'Pick a function to test',
    choices: [
      { title: 'Exerice 1', description: 'Finding next higher number', value: '1' },
      { title: 'Exerice 2', description: 'Shopping system', value: '2' },

    ],
    initial: 0
  })

  if (response.value === '1') {
    ex1();
  } else {
    ex3();
  }
}



/*********************Main************** */


main()
