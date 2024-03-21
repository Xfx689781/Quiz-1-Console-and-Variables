const prompt = require('prompt-sync')()
//Program 4: Largest Number Finder
let number1 = prompt("What is the first number?");//to input the first number
let number2 = prompt("What is the second number?");//to input the second number
if(number1>number2){//to compare the first two numbers
    let bigger= number1;
}
else{
    let bigger= number2;
}
let number3 = prompt("What is the third number?");
if(number3>bigger){//to compare the bigger number with the last number
    let biggest= number3;
}
else{
    let biggest= bigger;
}
console.log("The biggest number is "+biggest);//to output the biggest number