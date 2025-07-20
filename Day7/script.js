//loops in js 
//for loop
//ex1
for (let i = 1 ; i<=8 ; i++){
    console.log("Easy Code");
}

//(while loop ex)
//ex 1
let number = 0;
while( number <= 100){
    if (number % 2 == 0){ 
        console.log(number)
    }
 number ++
}

 //(do while loop)
 //ex1
 let num = 0;
 do {
    console.log(num);
    num ++
 } while (num < 7);
 
 //for-in loop
 //ex1
 let obj ={
    name :"siddhi",
    city : "pune",
    eduction :"bca"

 }
 for(let i in obj){
    console.log(i)
 }

//for-of loop 
//ex1
let cars =["thar","range rover","triber","santro"]
for(let car of cars){
   console.log(car)
}

