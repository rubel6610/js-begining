

function totalbudget(lapNum, tabNum, mobNum){
    let laptopPrice = 35000;
    let tabletPrice = 15000;
    let mobilePrice = 10000;
    let total = (laptopPrice * lapNum) + (tabletPrice * tabNum) + (mobilePrice * mobNum);
    return total;
}
 
console.log(totalbudget(1, 3, 5));