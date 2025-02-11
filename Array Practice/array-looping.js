// reverse a Array
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let revColors = [];
for(let i = colors.length -1; i >=0; i--){
    let color = colors[i];
    revColors.push(color)

}

console.log(revColors);

//  reverse Array with unsift
let reverseArray = [];
for(let i = 0; i<colors.length; i++){
    let color = colors[i];
    reverseArray.unshift(color)
}
console.log(reverseArray);

// getting even number from array
const numbers = [12, 98, 5, 41, 23, 78, 46];
let evenNum = [];
for(let i=0; i <numbers.length; i++){
    let num = numbers[i];
    if(num % 2 === 0){
        evenNum.push(num)
    }
}
console.log(evenNum);

// concatenate all array into a single string

var title = ['Tom', 'Tim', 'Tin', 'Tik']

var strNum = "";
for(let num of title){
    strNum += num
}
console.log(strNum);

// reverse the word of string using reverse method
const statements = 'I am a hard working person'

let reversestatement = statements.split(" ").reverse().join(" ");
console.log(reversestatement);

// reverse string
 const statement = 'I am a hard working person';

 let word = statement.split(" ");
  let reveStatement = "";
 for(i= 0; i<word.length; i++){
    reveStatement = word[i] + ' ' + reveStatement;
 }
 console.log(reveStatement);