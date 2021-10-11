
// function functionName (parameter1, parameter2) {
//     // Code that we want to execute
//     console.log(parameter1)
//     console.log(parameter2)
// }

// const a = "Hello"
// const b = "World"

// functionName(a, b)

// function sumOfTwoVariables(x, y) {
//     return x + y
// }

// const n = 10
// const m = 12

// const sum = sumOfTwoVariables(n, m)
// console.log(sum)

// function diameterOfCircle(radius) {
//     return radius * 2
// }

// function areaOfCircle(radius) {
//     return radius*radius*3.14
// }

// const radius = 5
// const diameter = diameterOfCircle(radius)
// const area = areaOfCircle(radius)

// console.log(radius, diameter, area)

// function isUnderAge(age) {
//     return age < 18
// }
// console.log( isUnderAge(17) ) // true
// console.log( isUnderAge(18) ) // false
// console.log( isUnderAge(21) ) // false

// function greeting(name="Unknown") {
//     return `Hello, ${name}`
// }

// console.log( greeting("Hassan") )
// console.log( greeting() )


// /*
//     sayHi(“Jonas”, “Hello”)

//     "Hello, Jonas"
// */

// function sayHi(name, greeting) {
//     return `${greeting}, ${name}`
// }

// const greeting_ = "Hi"
// const name_ = "Jonas"

// console.log( sayHi(name_, greeting_) )


/* Program 1 */

// let age = 30

// function birthday() {
//     age++
// }

// console.log(age)
// birthday()
// console.log(age)

/* Program 2 */

// function birthday(age) {
//     return ++age
// }

// let age = 30
// age = birthday(age)
// console.log(age)

// let i = 0
// while (i < 10) {
//     console.log(`Hej ${i}`)
//     i++
// }
// console.log("Jag är klar")

const fruits = ["apple", "banana", "mango", "pear", "strawberry", "grapes", "lemon"]

for (let i = 0; i < fruits.length; i++) {
    console.log(i)
    console.log(fruits[i])
}

const myArray = [1, 2, 3, 4, 5, 6]
myArray.forEach(item => {
    console.log(item)
})

function sumOfArray(array) {
    let sum = 0
    array.forEach(item => {
        sum +=item
    })
    return sum
}

function averageOfArray(array) {
    /* 
    * 1. Summerar innehållet i arrayn
    * 2. Dividerar summan med antal element i arrayn
    */ 
    const sum = sumOfArray(array)
    return sum/array.length
}

const arr1 = [3, 5, 22, 5,  7,  2, 45, 75, 89, 21, 2];
const arr2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];

console.log(sumOfArray(arr1))
console.log(averageOfArray(arr1))

console.log(sumOfArray(arr2))
console.log(averageOfArray(arr2))

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arr4 = arr3.map(item => {
    return item*3
})

const arr5 = arr3.filter(item => {
    return item > 5
})
console.log(arr5)

students = [
    { birthYear: 1980, marks: 80 },
    { birthYear: 1979, marks: 60 },
    { birthYear: 1990, marks: 70 },
    { birthYear: 2000, marks: 85 },
    { birthYear: 2010, marks: 62 },
    { birthYear: 1967, marks: 49 },
    { birthYear: 1949, marks: 30 },
    { birthYear: 1996, marks: 83 },
    { birthYear: 2001, marks: 19 },
]

const passedStudents = students.filter(item => {
    return item.marks >= 60
})
console.log(passedStudents)