// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named IIFE 
    console.log(`Database on`);
})();

(  (name) => {
    console.log(`Database connected ${name}`);
}) ('ashu')