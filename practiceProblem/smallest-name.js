const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(str){
    let resultName = str[0];
    for(let name of str){
        if(resultName.length > name.length){
            resultName = name;
        }
    }
    return resultName;
}

let result = smallestName(heights2);

console.log(result);