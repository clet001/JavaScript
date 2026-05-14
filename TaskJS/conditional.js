const prompt = require("prompt-sync")();

let user = {name: "john",age: 17};
    let age= prompt("input your age: ")
    

    if(age >= 18){
    console.log("Adult")
}
    else{

    console.log("Minor")
}


