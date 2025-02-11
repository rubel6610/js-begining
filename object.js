// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };

// console.log(colors["golden rod"]);

// // add property and value into a object
// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };

// car.passengerCapacity = 5;
// console.log(car);

// // display a nested property

// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };
// console.log(student.physics.marks);

// // count the number of property

// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };
// let propertyCount = Object.keys(student);
// console.log(propertyCount);

// print key value pairs by looping with type

let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
    };
for(let key in myObject){
    console.log(key + ': ' + myObject[key] + " | Type is:" + typeof(myObject[key]));
}