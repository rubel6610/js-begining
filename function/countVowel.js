
function countvowel(str, vowels){
    let vowelCount = 0;
    for(let i = 0; i<sentence.length; i++){
        let letter = sentence[i];
        for (let vowel of vowels){
            if(letter === vowel){
                vowelCount++;
            }
           
        }
       
    } return vowelCount;
    
}

let vowels = ["a", "e", "i", "o", "u"]
let sentence = "A quick brown fish jumps over the lazy dogs";
let result = countvowel(sentence, vowels);
console.log(result);

// count vowel using while loop

function voweldigit(vowels, string){
    let digit = 0;
    let i=0;
    while(i<string.length){
        let digitStr = string[i];
        for(vowel of vowels){
            if(vowel === digitStr){
                digit++;
            }
        }
        i++;
    }
    return digit;
}

let count2 = voweldigit(vowels, sentence);
console.log(count2);