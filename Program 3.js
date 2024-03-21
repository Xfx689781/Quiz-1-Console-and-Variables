const prompt = require('prompt-sync')()
//Program 3: Leap Year Checker
let year = prompt("What year is it?");//to input the year
if(year%4===0&&year%400!==100&&year%400!==200&&year%400!==300){  //a leap year is a multiple of 4, but 2100, 2200, 2300 are not, which means for the century years, only which can be divided by 400 are leap years
    console.log("This year is a leap year");
}
else{
    console.log("This year is not a leap year");
}
//to output whether the year is a leap year or not