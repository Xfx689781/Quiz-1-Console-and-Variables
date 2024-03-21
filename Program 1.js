const prompt = require('prompt-sync')();

//Program 1: Temperature Converter
let temp = prompt("What's the temperature today in Fahrenheit?"); //to input the temperature in Fahrenheit
console.log("Today's temperature is "+((temp-32)*5/9)+"degree celcius");//to output the temperature in celsius