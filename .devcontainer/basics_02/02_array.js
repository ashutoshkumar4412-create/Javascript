const marvel_heros = ["thor", "Ironman", "spiderman"]
const indian_heroes = ["SRK", "HR", "AM"]

//marvel_heros.push(indian_heroes)

//console.log(marvel_heros)

//const allheroes = marvel_heros.concat(indian_heroes)
//console.log(allheroes)

const all_new_heroes = [...marvel_heros, ...indian_heroes]
//console.log(all_new_heroes)
 
const another_arr = [1, 2, 3, 4, 5,[6, 7, 8],9,[2, 3, 4 [8, 9]] ]
const real_another_array = another_arr.flat(Infinity)
//console.log(real_another_array)

console.log(Array.isArray("ashutosh"))
console.log(Array.from("ashutosh"))
console.log(Array.from({name: "ashutosh"}))  //intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))