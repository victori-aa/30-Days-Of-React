import { webTechs } from "./web_techs.js";
import { countries } from "./countries.js";

let text = 'I love teaching pepol and empowering women. I teach balls and ' + webTechs.join(", ") + '.';

console.log(text);
text = text.replaceAll(".", "")
text = text.split(" ");
console.log(text)

const shopping = ['Milk', 'Coffee', 'Tea', 'Honey'];

shopping.unshift("Meat")

shopping.push("Sugar");

shopping.push("pine tar")

shopping[shopping.indexOf("Tea")] = "Green Tea"

console.log(shopping)

if (!countries.indexOf("Ethiopia")){
    countries.push("Ethiopia")
}

console.log(countries)

if (countries.includes("Sass")){
    console.log("Sass is a CSS preprocess")
}
else{
    countries.push("Sass")
    console.log(countries)
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

let fullStack = frontEnd.concat(backEnd)

console.log(fullStack)