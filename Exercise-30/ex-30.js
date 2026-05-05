// Exercise 30
// part one

function operate(x, y, callback){

    return callback(x, y)

}
 function multiply(x,y){
    return x * y

 }
 console.log("Multplying =", operate(5,2, multiply))



 // part one

function operate(x, y, callback){

    return callback(x, y)

}
 function divide(x,y){
    return x / y

 }
 console.log("dividing =", operate(10,2, divide))
