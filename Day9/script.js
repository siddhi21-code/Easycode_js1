
//document obj ex
//ex1
let title = document.title
console.log(document.title);

//ex2
document.body.style.background = "orange";

//ex3
document.write("siddhi");

//ex4
let  number = parseInt(prompt("enter the number"))
document.title = " table of " + number
for (let i = 1; i  <= 10; i++){
    let op = i * number 
}
document.writeln("<h1>"+ op  + "</h1>");

//ex5
let username = "github"
let websiteurl ="http://github.com";
console.log('hello ${userName} welcome  ${websiteurl}')