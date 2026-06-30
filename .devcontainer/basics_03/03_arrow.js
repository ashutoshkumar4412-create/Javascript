const user = {
    username: "ashu",
    price:99,

    welcomeMessage: function() {
        //console.log(`${this.username} , welcome to website`);
        //console.log(this);
    }


}

//user.welcomeMessage()
//user.username = "sumit"
//user.welcomeMessage()

//console.log(this);

//function modi(){
 //   let username = "ashu"
   // console.log(this.username);
//}
 
//modi()

//const chai = function (){
//    let username = "ashu"
//    console.log(this.username);
// }
//chai()

//const chai =  () => {
//  let username = "ashu"
//console.log(this);
//}
//chai()

//const addTwo = (num1, num2) => {
//   return num1 + num2 
//}

//const addTwo = (num1, num2) => num1 + num2

//const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "ashu"})

console.log(addTwo(3,5))


