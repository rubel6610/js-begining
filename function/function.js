
// even and odd number with function

function evenodd(num){
    if(num%2 === 0){
       let even =  num / 2;
       return even;
        
    }
   else if(num % 2 !== 0){
      let odd =  num * 2
        return odd;
    }
}

const result = evenodd(11)
console.log(result);

// make average number

function avg(arr){
  let totalList = 0;
    for (let list of arr){
        totalList += list;
       
    }
    let average = totalList / arr.length;
       return average;
 
}

let averageResult = avg([28, 32, 55])
console.log(averageResult);


// count binary string

function count_zero(binaryString){
     let count = 0;
     for(let char of binaryString){
        if(char === "0" || char === 0){
            count++;
        }
     }
     return count;
}
let binaryStr = '101010101010';
console.log(count_zero(binaryStr));

// get even and odd num

function odd_even(num){
    if(num %2 === 0){
        console.log("Number is even");
       
    }
    else{
        console.log("Number is odd");
    }
}
odd_even(7);
