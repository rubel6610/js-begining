// simple array task
let fruits = ["mango", "lemon", "orange", "olive", "jackfruit"];
console.log(fruits[2]);

fruits[1] = "jambura";
console.log(fruits);


// add and remove elements from array

let touristSpot = ["cox's bazar", "sea beach", "saint martin", ]

touristSpot.push("sajek");
touristSpot.push("altaf master ghat", "boro station");

touristSpot.pop(touristSpot[5])

console.log(touristSpot);


// checking array membership with includes

let books = ['bangla', 'english', "math", 'science']

if(books.includes('english')){
    console.log("English is present in the books array" )
}else{
    console.log("english is not here");
}




// checking if it's an array

let department = ['bangla', 'english', "math", 'science'];

let fruit = "mango";

let checkArray = Array.isArray(department)

if(checkArray == true){
    console.log("it is a array");
}else{
    console.log("it's not a array");
}
    

//combining Array


let subject = ['bangla', 'english', "math", 'science'];

let food = ['bhat', "mash", "fish", "kola"]

let arrayConcat = subject.concat(food);

console.log(subject);
console.log(food);
console.log(arrayConcat);
