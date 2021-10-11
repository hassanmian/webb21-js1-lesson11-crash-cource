/*
    Räkna ut ålder
    * Året just nu
    * Året du är född
    * Substrahera året just nu med året du är född
    * Skriv ut resultatet
*/

const name = "Hassan" // Det här är en kommentar

const currentYear = 2021
const birthYear = 1986
const age = currentYear - birthYear

console.log(name)
console.log(age)

const message = name + " is " + age + " years old"
console.log(message)

const stringWithLinebreak = "Line 1 \nLine 2"
console.log(stringWithLinebreak)

const newMessage = `${name} is ${age} years old`
console.log(newMessage)

const pi = 3.14

const isTodayMonday = true
console.log(isTodayMonday)
console.log(typeof(isTodayMonday))

const isTodayFriday = false
console.log(isTodayFriday)
console.log(typeof(isTodayFriday))

let theFuture;
console.log(theFuture)
console.log(typeof(theFuture))

let nothing = null
console.log(nothing)
console.log(typeof(nothing))

const emptyArray = []
const fruits = ["apple", "banana", "pineapple", "mango", "tomato"]

console.log(fruits)
console.log(fruits[0])
console.log(fruits.length)
console.log(fruits[fruits.length - 1])
console.log(typeof(fruits))

const a = 2
const b = "2"
console.log(a)
console.log(b)

console.log(a+b)


const isTodayTuesday = false
console.log(!"false")

const banana = "b" + "a" + +"a" + "a"
console.log(banana)

console.log(NaN === NaN)
console.log(typeof(NaN))

const x = 3
const y = 5
const z = 3

console.log(y > x)
console.log(x >= z)

console.log(y>x && x>=z)
console.log(y>x && x>z)

console.log(y>x || x>=z)
console.log(y>x || x>z)

console.log((true || false) && (false || true))
console.log( true && true)

let coronaYear = 2020
coronaYear++
console.log(coronaYear)

const user = {
    age: 35,
    birthYear: 1986,
    name: {
        firstName: "Hassan",
        lastName: "Mian",
    },
    interests: {
        hobbies: ["programming", "music", "basketball"]
    },
    isTeacher: true
}
console.log(user.age)
console.log(user.birthYear)
console.log(user.name.firstName)
console.log(user.interests.hobbies[0])

const car = {
    brand: "Audi",
    modelYear: 2000,
    model: "A3",
    currentMileage: 8000,
    bigServiceMileage: 6000
}

/* "You own a {brand} {model} that has been driven for {currentMileage} km" */ 
console.log(
    `You own a ${car.brand} ${car.model} that has been driven for ${car.currentMileage} km` 
)
/* Om currentMileage är större än bigServiceMileage: Skriv ut "Time for big service" */
if(car.currentMileage > car.bigServiceMileage) {
    console.log("Time for big service")
}