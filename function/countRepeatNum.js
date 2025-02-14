
let numbers = [5,6,11,12,98, 5];

function countrepeat(num){
    let count = 0;
    for(number of num){
        if(number === 5){
            count++;
        }
    }
    return count;
}
let result = countrepeat(numbers)
console.log(result);

// try another way of searching repeating numbers and find 25
let list = [5,6,11,12,98,25, 5];
let findNum = 25;
let repeatNum = 0;
function find(num, target){
    for(i=0; i<list.length; i++){
        let item = list.i;
        if(item === target){
            repeatNum++;
        }else{
            repeatNum=0;
        }
    }
    return repeatNum;
}
let result2 = find(list,findNum)
console.log(result2);