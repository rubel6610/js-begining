for(let i = 0; i<=60; i++){
    console.log(`${i} I will invest at least 6 hrs every single day for next 60 days! `)
}

// odd number between 61 and 100
for(let odd = 61; odd<=100; odd++){
    if(odd % 2 !==0){
        console.log(odd);
    }
}

// finding all even number between 78 and 98
for (let even = 78; even <=98; even++){
    if(even %2 ===0 ){
        console.log(even);
    }
}

// sum odd of number 91 to 129
let total=0;
for(let sum = 91; sum <= 129; sum++){
    if(sum %2 !==0){
        total += sum;
    }
    
    
}
console.log(total);

// sum even of number 51 to 85
let totaleven=0;
for(let sum = 51; sum <= 85; sum++){
    if(sum %2 ===0){
        totaleven += sum;
    }
    
    
}
console.log(totaleven);

// multiplication table for number 9
for (let num = 1; num<=10; num++){
    let multiply = num * 9;
    console.log(multiply);
}

// countdown timer

for(let i = 81; i>=65; i--){
    console.log(i)
}

