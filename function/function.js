// getting total budget

function calculate(numMobile, NumLaptop, numTablet){
    let mobilePrice = 20000;
    let laptopPrice = 35000;
    let tabletPrice = 15000;
    const totalbudget = (numMobile * mobilePrice) + (numTablet * tabletPrice) + (NumLaptop * laptopPrice);
    return totalbudget;
}

const numDevices = calculate(3, 5,2);

console.log(numDevices);
