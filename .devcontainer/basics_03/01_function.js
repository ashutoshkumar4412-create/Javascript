function sayMyclass(){
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("U");
}
//sayMyclass()

function addTwoNumbers(num1,num2){
 
    let result = num1 + num2
    return result 
    return num1 + num2 
}

const result = addTwoNumbers(5, 8)
 //console.log("Result: ", result);

 function userloginMessage(username = king){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
 }

 //console.log(userloginMessage("ashu"))
 //console.log(userloginMessage("ashu"))

 //console.log(calculateCartPrice(200, 400, 600, 2000))

 const user = {
    username: "ashu",
    price:99
 }

 function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

 }

 //handleObject(user)
handleObject({
    username: "king",
    price:99
})

const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 800]));
