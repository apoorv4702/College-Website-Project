console.log("This is tutorial for functions") ;

function greet(gone, greetText = "Greetings from JavaScript"){
    let name1 = "Name" ;
    console.log(greetText + " " + gone ) ;
    console.log(gone + " is a good boy ") ;
}

function sum (a,b,c){
    let d = a + b + c ;
    return d ;
    // This line will never execute
    // console.log("Function is returned") ;
}


let name1 = "Apoorv" ;
let name2 = "Shubham" ;
let name3 = "Rohan" ;
let name4 = "Sagar" ;
let greetText = "Good Morning";
greet(name1, greetText);
greet(name2, greetText);
greet(name3, greetText);
greet(name4);
// let returnVal = greet(name3) ;
// console.log(returnVal) ;

let returnVal = sum (1, 2, 3) ;
console.log(returnVal) ;
// console.log(name1 + " is a good boy ") ;
// console.log(name2 + " is a good boy ") ;
// console.log(name3 + " is a good boy ") ;
// console.log(name4 + " is a good boy ") ;
