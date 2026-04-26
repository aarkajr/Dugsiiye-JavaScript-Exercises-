
// Exercise 25

// Part 1

const num = [1,2,3,4]

const FullNumbers = [...num, 5,6,7,8,9,10]

console.log(FullNumbers)


// Part 2


function mult(...num){
    return num.reduce((total, num) => total * num, 1)
}

console.log(mult(2,4,10))
