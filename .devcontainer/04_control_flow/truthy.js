const userEmail = []

if (userEmail) {
  console.log("You have an email address");
} else {
  console.log("Please provide an email address");
}

// falsy values in js:

// false, 0, -0, 0n,"", null, undefined, NaN, BigInt

// truthy values in js:
// "0","false","  ", [], {}, function(){} , true, 1, -1, 3.14, "false", "true", "hello", new Date(), -Infinity, 

//if (userEmail.length === 0) {
//  console.log("Array is empty");
//}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}
 
//Nullish coalescing operator (??): null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 14
//val1 = undefined ?? 30
val1 = null ?? 10 ?? 20


console.log(val1);

// Tirniary Operator

// condition ? true : false 

const icePrice = 100
icePrice <= 70 ? console.log("less than 70") : console.log("more than 70")
