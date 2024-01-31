let arr = [];
arr = [1, 5, 2, 44, 56, 23]
let len = arr.length

let first = arr[0];
let last = arr[len - 1];
let middle = arr[Math.floor((len - 1) / 2)];

console.log(middle);

let mixedDataTypes = ["meow", 5, 2.3, "orange", true, 0];

let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies.length);

console.log(itCompanies[0] + " " + itCompanies[itCompanies.length-1] + " " + itCompanies[Math.floor((itCompanies.length - 1) / 2)]);

for (let i = 0; i < itCompanies.length; i++){
    console.log(itCompanies[i])
}


itCompanies.forEach(company => console.log(company.toUpperCase()))


let str = itCompanies.slice(0, -1).join(", ");
console.log(str + " and " + itCompanies[itCompanies.length-1] + " are big IT companies");


function ifIn(arr, company){
    if (arr.indexOf(company) > 0){
        return true
    }
    return false
}

console.log(ifIn(itCompanies, "Amazon"));
console.log(ifIn(itCompanies, "meowemwoe"));

let noO = [];
itCompanies.forEach(company => (!company.includes("o") && !company.includes("O")) ? noO.push(company) : void(0));

noO.forEach(company => console.log(company))

let sorted = itCompanies.sort();
sorted = sorted.reverse();

sorted.forEach(company => console.log(company))

console.log("---");

console.log(itCompanies.slice(0, 3))
console.log(itCompanies.slice(-3))
console.log(itCompanies.slice(Math.floor(itCompanies.length/2), Math.ceil(itCompanies.length/2)));


console.log(itCompanies)

itCompanies.pop(0);
itCompanies.pop(itCompanies.length)

console.log(itCompanies)

itCompanies.pop(Math.floor(itCompanies.length/2))
console.log(itCompanies)


let meow = itCompanies.length
for (let i = 0; i < meow; i++){
    itCompanies.pop(0)
}
console.log("---")
console.log(itCompanies)

