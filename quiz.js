const prompt = require('prompt-sync')();

//Program 1: Temperature Converter
let temp = prompt("What's the temperature today in Fahrenheit?");
console.log("Today's temperature is"+((tem-32)*5/9)+"degree celcius");
//Program 2: Grade Calculator
let grade = prompt("What's your grade in percentage? Like 85, 90, etc.");
if (grade>=90&&grade<=100){
    console.log("You get an A!!!");
}
if (grade>=80&&grade<90){
    console.log("You get a B!!!");
}
if (grade>=70&&grade<80){
    console.log("You get an C!!!");
}
if (grade>=60&&grade<70){
    console.log("You get a D!!!");
}
if (grade>=0&&grade<60){
    console.log("You get a F!!!");
}
else{
    console.log("That's impossible! Please do it again!!!");
}
//Program 3: Leap Year Checker
let year = prompt("What year is it?");
if(year%4===0&&year%400!==100&&year%400!==200&&year%400!==300){
    console.log("This year is a leap year");
}
else{
    console.log("This year is not a leap year");
}
//Program 4: Largest Number Finder
let number1 = prompt("What is the first number?");
let number2 = prompt("What is the second number?");
if(number1>number2){
    let bigger= number1;
}
else{
    let bigger= number2;
}
let number3 = prompt("What is the third number?");
if(number3>bigger){
    let biggest= number3;
}
else{
    let biggest= bigger;
}
console.log("The biggest number is"+biggest);