//definitions 
// Higher order function means anathor function as a parameter (return and reverse) is called as asa h_o_f()

//ex1

//function1
 
const sum = (a,b) =>{
    console.log(a+b)
}

//function2

const m1=(func)=>{
    console.log("hiii to all in js ")
    func(1,2);
}

m1(sum);


