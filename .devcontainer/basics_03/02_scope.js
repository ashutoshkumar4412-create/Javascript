var c = 300

if(true) {
    let a = 18
    const b = 20 
    //console.log("Inner: ",a);

}

 //console.log(a);
 //console.log(b);
 //console.log(c);




 function one(){
    const username = "ashu"

    function two(){
        const website = "google"
        console.log(username)
    }
    //console.log(website);

    //two()

 }
 one()

 if(true){
    const username = "ashu"
    if (username === "ashu"){
        const website = " google"
        //console.log(username + website);
    }
    //console.log(website);
 }





 //+++++++++++ interesting +++++++++++


console.log(addone(7))

function addone(num){
    return num + 1
}


addTwo(5)
const addTwo = function(num){
    return num + 2
}