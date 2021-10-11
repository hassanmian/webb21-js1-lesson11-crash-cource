
const condition = true

condition ? console.log("sant") : console.log("falskt")

const age = 65

if(age <18) {
    console.log("cannot vote")
} else {
    console.log("can vote")
}

age < 18 ? console.log("cannot vote") : console.log("can vote")

/*
    * Om ålder är under 13: Barn
    * Om ålder är 13 och mindre än 20: tonåring
    * Om ålder är 20 och mindre än 65: vuxen
    * Om ålder är 65 och uppåt: pensionär
*/

if(age < 13) {
    console.log("Barn")
} else if(age >= 13 && age < 20) {
    console.log("Tonåring")
} else if(age >= 20 && age < 65) {
    console.log("Vuxen")
} else {
    console.log("Pensionär")
}

const currentWeather = "adsadsadsadsa"
let weather;
switch(currentWeather) {
    case "rainy":
        console.log("Det kommer regna")
        weather = 1
        break
    case "sunny": 
        console.log("Det verkar vara soligt")
        weather = 2
        break
    case "cloudy":
        console.log("Lite molnigt idag")
        weather = 3
        break
    default:
        console.log("Ogiltigt väder")
        weather = 0
}
console.log(weather)