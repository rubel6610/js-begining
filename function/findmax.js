let sentence = "I am Learning Programing to become a programer. I am a very quick learner at codingIndusty";

let words = sentence.split(' ');
let largeword = '';

function findmax (str){
    let i = 0;
    while(i<str.length){
        let word = str[i];
        if(word.length >  largeword.length){
            largeword = word;
        
     
    }
     i++;
}
return largeword;
}
let maxWord = findmax(words)

console.log(maxWord);