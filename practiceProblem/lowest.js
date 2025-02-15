const heights2 = [167, 190, 120, 165, 137];

function lowestNum(num){
    count = 0;
    for(let height of num){
        if(count < height){
            count = height;
        }
    }
    return count;
}

let result = lowestNum(heights2)
console.log(result);