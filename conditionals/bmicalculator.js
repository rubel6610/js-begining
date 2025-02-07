let weight = 55;
let heightInfeet = 5;

let meterHeight = heightInfeet / 3.2808;

let bmi = weight / (meterHeight * meterHeight);

console.log(bmi.toFixed(2))

if(bmi < 18.5){
    console.log("You are underweight")

}else{
    if(bmi >= 18.5 && bmi <= 24.9){
        console.log("You are normal") 
    }else{
        if(bmi >=25 && bmi <=29.9){
            console.log("you are overweight")
        }else{
            console.log(
                'You are obese'
            )
        }
    }
}


