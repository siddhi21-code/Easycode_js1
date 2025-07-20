//cal ex 1 in js 

let num1 = parseInt(prompt("enter first number"))
let num2 = parseInt(prompt("enter second number"))


let opration = prompt("enter opration")

switch(opration){
    case "+":
        sum(num1  ,num2)
        break;

        case "-":
        sub(num1  ,num2)
        break;

        case "*":
        mul(num1  ,num2)
        break;

        case "/":
        div(num1  ,num2)
        break;

        default:
            console.log("invalid opration")
            break;
}

function sum(no1,no2){
    console.log(no1+no2)
}


function sub(no1,no2){
    console.log(no1-no2)
}



function mul(no1,no2){
    console.log(no1*no2)
}



function div(no1,no2){
    console.log(no1/no2)
}