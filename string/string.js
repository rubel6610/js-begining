const intro = "Hello ! I am Md Rubel Hosen. A professional web developer";
let counting = "";
for(let i = 0; i<intro.length; i++){
   if(intro[i] == 'a' || intro[i] == "A"){
        counting++;
   }
}
console.log(counting);
const strings = "Hello ! I am Md Rubel Hosen. A professional web developer";
let letters = ['a', 'b', 'c', 'd', 'e']
let final = {};
for(let letter of letters){
   let container = 0;
    for(let string of strings){
        if(string.toLowerCase() === letter){
            container++; 
    }
   
} final[letter] = container;
}
console.log(final);

// whether a string contain all vowels or not

let vowels = ['a', 'e', 'i', 'o', 'u'];
let count = 0;

for(let vowel of vowels){
    if(!strings.includes(vowel)){
       console.log("no vowels found");
    }else{
        count++;
    }
}
console.log('Number of vowels are', count);

// whether a string contain all vowels or not by booleaan
let allvowels = true;
for(let vowel of vowels){
    if(strings.toLowerCase() != vowel){
        allvowels = false;
        break;
    }
}
console.log(allvowels);

// how many times a string has the a or A
let vowelcount = 0;
for(let string of strings){
  if(string === "a" || string === "A"){
    vowelcount++;
  }
}
console.log(vowelcount);

// replace X to Y

let str = "x and X";
if(str.includes('x') || str.includes('X')){
   let newstr = str.replace('x', 'y').replace('X',"Y")
   console.log(newstr);
}

// Capatilize every letter of word

const string = "capitalize every first letter of each word in a string";

let words = string.split(' ');

let capitalizeWords = '';
for(let i = 0; i<words.length; i++){
       let word = words[i]
       console.log(word);
       capitalizeWords += word.charAt(0).toUpperCase() + word.slice(1) + ' '
        
}

console.log(capitalizeWords);