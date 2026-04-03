// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abs"
tinderUser.name = "ashu"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser = {
    email: "who@gmail.com",
    fullname: {
        userfullname: {
            firstname: "ashu",
            lastname: "singh"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = { obj1,obj2}
//const obj3 = Object.assign({},obj1, obj2)

const obj3 = {...obj1,...obj2}
//console.log(obj3)


const users = [
    {
        id: 1,
        email: "ashu@king.com"
    },
    {
        id: 2,
        email: "ashu@123.com"
    },
    {
        id: 3,
        email: "ashu@omg.com"
    },
    {
    },
    {
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));   //important
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'))


const course = {
    coursename: "js in hindi",
    price: "000",
    courseInstructor: "ashu"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor)

 /*{
    "name": "ashu"
    "coursename": "js in hindi"
    "price": "free"
 }*/

 [
    {},
    {},
    {}
 ]
