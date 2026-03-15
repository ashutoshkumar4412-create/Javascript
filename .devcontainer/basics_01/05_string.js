const name = "ashutosh"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sidhe-back')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.lenghth);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const newStringOne = "   ashu   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://ashukr.com/ashu%34kr"
console.log(url.replace('%34',"-"))

console.log(url.includes('badsurat'))

console.log(gameName.split('-'))

