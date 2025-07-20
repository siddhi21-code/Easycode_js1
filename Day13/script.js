//Objects in js methods
   
//ex1 Object_key  &  Object_Values
const person = {
    name: "xyz",
    age: 18
};
let res = Object.keys(person)
let values = Object.values(person)
 console.log(res);
 console.log(values);

//ex1  Object_Freeze  &  Object_Entries
const car = {
    name: "Ford",
    model: "Cv4"
};
let cname = Object.entries(car)
let mname = Object.freeze(car)
 console.log(cname);
 console.log(mname);

 //ex Freeze M in js 
 let cakeshop_detail ={
    cake_order : "100",
    cake_price : "300000",
    cake_order_date :17/4/2004
 };
 
 Object.freeze(cakeshop_detail)
 cakeshop_detail = 1
 console.log(cakeshop_detail)