const prompt = require("prompt-sync")();

let username = prompt("Enter Username: ");
let password = prompt("Enter Password: ");

function credentials(username, password){
if (username == "Clemn"){
    console.log("username correct");
}else if(password == 1234567){
    console.log("Password Correct");
}
else{
    console.log("Invalid Credentials");
}
}

credentials(username, password);
