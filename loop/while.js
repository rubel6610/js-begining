let i = 0;

while(i <= 60){
    console.log(i);
    console.log('I will invest at least 6 hrs every single day for next 60 days!');
    
    i++
}

//find the odd numbers from 61 to 100
let oddNum = 61;
while(oddNum <= 100){
   if(oddNum % 2 !== 0){
    console.log(oddNum);
   }
    oddNum++
}
 //find the even numbers from 61 to 100
let evenNum = 78;
while(evenNum <= 98){
   if(evenNum % 2 === 0){
    console.log("even Num", evenNum);
   }
    evenNum++
}

// sum of the odd number from 81 to 131
let num = 81;
let sum = 0;
while(num <= 131){
   if(num % 2 !== 0){
    sum += num;
   }
    num++
}
console.log(sum);

 // sum of the even number from 81 to 131
 let evendigit = 81;
 let totaleven = 0;
 while(evendigit <= 131){
    if(evendigit % 2 !== 0){
     totaleven += evendigit;
    }
     evendigit++
 }
 console.log(totaleven);

 //multiplication table of number 5
 let digit = 1;
 while(digit <= 10){
    console.log(`5 × ${digit} = ${digit*5}`)
   digit++
 }

// countdown
let count = 21;
while(count >=15 ){
   
    count--
}

