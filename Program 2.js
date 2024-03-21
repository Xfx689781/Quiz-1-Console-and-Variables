const prompt = require('prompt-sync')()
//Program 2: Grade Calculator
let grade = prompt("What's your grade in percentage? Like 85, 90, etc.");//to input the grade
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
    console.log("That's impossible!!!");
}
//to output the grade in different situations from 0 to 100. If the grade is less than 0 or more than 100, it's impossible!