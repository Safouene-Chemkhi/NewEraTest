// Imports
const io = require('console-read-write');


/**
  * @desc Finding the next higher number
  * @param void $msg - Please type a number:
  * @return void - success or failure
  * @exampel if the given number is 1234, the next higher number with the same digits is 1243.
*/

async function ex1() {
    io.write('Please type a number:');
    var num = await io.read();
    var  n = num.toString();
    var found = false;
    i=n.length-1;
    while (!found  || i<1){
         if(n[i]>n[i-1]){
             var x= n.charAt(i);
             n = n.replace(n.charAt(i),n.charAt(i-1));
             n = n.replace(n.charAt(i-1),x);
         }
    }
    if (found){
        io.write(n);
    } else {
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
        'Apple' :0.6,
        'Orange' :1.25
    }
    var total = 0;
    for (let i = 0; i < list.length; i++) {
        total += price[list[i]];
    }

    io.write(total.toFixed(2) + '$');
}


/*********************Main************** */
ex1();
ex2();

