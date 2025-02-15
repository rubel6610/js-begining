const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findavgPrice(phones){
    let total = 0;
    for(phone of phones){
       let price = phone.price;
       total += price;
    }
    let avgtotal = total / phones.length;
    return avgtotal;
}
console.log(findavgPrice(phones));