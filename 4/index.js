// https://nodejsera.com/nodejs-tutorial-day4-console-module.html
//using ' ' to print
console.log('1 : hello world !');
//using " " to print
console.log("2 : this will also work");

var str = 'nodejsera';

var val = 25;
//printing a string
console.log(str);   //3
//printing a variable and replacing the 
//value of variable in place of %d
console.log('4: Value of val is : %d' , val);
//replacing a string in place of %s
console.log('5: %s' , 'this will be printed after 5');	
//concatinating in console		
console.log("6 : str = " + str);	

// Creating a new console

var fs = require('fs')

const { Console } = require('console')
const output = fs.createWriteStream('./stdout.log')
const errOutput = fs.createWriteStream('./stderr.log')

// simple print

const print = new Console(output, errOutput)

const roll = 123123
print.log("roll %d", roll)
print.log("This will be stored in a file")

// Count
console.log('hit')
console.log('hit')

console.count('hit')
console.countReset('hit')
console.count('hit')

// Console error
console.error('Error: whooops')

// Console time

console.time('division')

var x = 10;
var y = 20;

var result = x/y;

if(result == 2){
    console.log("Result : %d".result)
}else{
    console.log("Result : " + result);
}
console.timeEnd('division')

// Console warn
console.warn("Warning: asdasd")

