const prompt = require("prompt-sync")();

let age = prompt ("What is your age")

if(age > 12){
    console.log("My age is: ", input)
}else if(age < 18){
    console.log("Teenager")
}else if(age >= 18){
    console.log("Adult")
}else if(age == 15){
    console.log("found the bug")
}


