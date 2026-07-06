// const coding = ["java", "cpp", "py", "js", "ruby"]


// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
    
// })
//  console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
//})

const newNums = []

myNums.forEach( (num) => {
    if (num > 4){
        newNums.push(num)
    }
})

//console.log(newNums);

const books = [
    { title: 'Book one', genre: 'Ficiton', publish: 1987,
        edition: 2010 },
    { title: 'Book two', genre: 'histoy', publish: 1986,
        edition: 2010 },
    { title: 'Book three', genre: 'history', publish: 1984,
        edition: 2010 },
    { title: 'Book four', genre: 'Non-Ficiton', publish: 1999,
        edition: 2010 },
    { title: 'Book five', genre: 'science', publish: 2034,
        edition: 2010 },
    { title: 'Book Six', genre: 'Geo', publish: 2455,
        edition: 2010 },
    { title: 'Book Seven', genre: 'Ficiton', publish: 2093,
        edition: 2010 },                        
];

let userBooks = books.filter(  (bk) => bk.genre === 'history')

userBooks = books.filter( (bk) => bk.publish > 2000 && bk.genre === 'science')

console.log(userBooks);

