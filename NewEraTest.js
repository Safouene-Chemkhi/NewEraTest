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
  * @desc Finding the next higher number
  * @param void $msg - Please type a number:
  * @return void - success or failure
  * @exampel if the given number is 1234, the next higher number with the same digits is 1243.
*/

function ex2(params) {
    
}


/*********************Main************** */

ex1()