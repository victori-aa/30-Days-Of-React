import { countries } from "./countries.js"
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort()

let min = ages[0]
let max = ages[ages.length-1]

console.log("min: " + min + " max: " + max)

let median;
if (ages.length%2 == 0){
    let lowMed = Math.floor((ages.length/2))
    median = (ages[lowMed] + ages[lowMed + 1])/2  
}
else {
    median = ages[ages.length]/2
}

console.log("median " + median)

let sum = 0;
ages.forEach(element => {
    sum += element
});

let avg = sum/ages.length
console.log("avg: " + avg)

console.log("range: " + (max-min))

console.log("min - avg: " + Math.abs(min- avg) + " max - avg: " + Math.abs(max-avg))

let firstTen = countries.slice(0, 10);
console.log(firstTen)

console.log(countries)

let middle;
if (countries.length % 2 == 0){
    let loc = (countries.length/2);
    middle = [countries[loc], countries[loc+1]]
}
else{
    middle = countries[((countries.length-1)/2)];
}
console.log("middle: " + middle)

let first = countries.slice(0, (countries.length%2 == 0) ? (countries.length/2) : (countries.length/2 + 1))
let second = countries.slice((countries.length%2 == 0) ? (countries.length/2) : (countries.length/2 + 1), countries.length)

console.log("first split: " + first)
console.log("second split: " + second)
