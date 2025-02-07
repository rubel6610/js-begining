let ticketprice = 300;
let age = 20;
if(age < 10 ){
    console.log('free ticket for childrens')
}else if(age > 10 && age <= 18){
    let discount = ticketprice * 50 /100;
    console.log("For students per ticket " + discount)
}else if(age >= 60){
    let seniorDiscount = ticketprice * 50 / 100;
    console.log("for Senior citizen per ticket " + ticketprice);
}else{
    console.log("Regular ticket Price " + ticketprice);
}