// singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name:"ashutosh",
    "full name": "ashutosh kumar",
    [mySym]: "mykey1",
    age: 18,
    location: "patna",
    email: "ashutosh@email.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser["full name"])
//console.log(JsUser[mySym])

JsUser.email = "ashutosh@google.com"
//Object.freeze(JsUser)
JsUser.email = "ashutosh@git.com"
//console.log(JsUser)

JsUser.greeting = function (){
    console.log("Hello JS user");    
}
JsUser.greetingTwo = function (){
    console.log(`Hello JS user,${this.name}`);    
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())