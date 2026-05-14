const prompt = require("prompt-sync")();
 let number = prompt("Enter Number: ");

function checks (number){
if( number<= -1){
    console.log("Negative");
}else if(number > 0){
    console.log("Postive");
}else{
    console.log("Zero")
}
}

checks(10);
