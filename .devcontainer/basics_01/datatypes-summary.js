//Primitive

//7 types :String, Number,Boolean, Null, undefined,Symbol,BigInt

const score = 100
const scoreValue =100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 234778234874784n


//Refrence(Non primitive)

// Array, Objects, Functions

const heros = ["shaktimaan","dhoom","oggy"]
let myObj = {
    name: "ashutosh",
    age: 22
}

const myFunction = function(){
    console.log("heloo ashu");
}

console.log(typeof outsideTemp)