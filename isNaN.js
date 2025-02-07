var a = isNaN('11')
console.log(a)
/*
    Here answer is false . Given value is a string . but we know that isNaN formula makes a value to a number befor testing it.So here a is not NaN
*/
var b = isNaN(2-11);
    
console.log(b)

/*
    Here answer will be false. Here given value is already a number. but isNaN folmula checked if a value is a not a number or not.
    */ 