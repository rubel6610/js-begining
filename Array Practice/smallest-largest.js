// getting maximum and minmum value by for of loop

const heights2 = [167, 190, 120, 165, 137];

let maxval= heights2[0]
let minval=heights2[0]
for(let height of heights2){
  if(height > maxval){
    maxval = height;
  }
  if(height < minval){
    minval = height;
  }
}
console.log(maxval);
console.log(minval);

// getting small and largest name from an array
const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

let smallestName = friends[0]
let largeName = friends[0]

for(let name of friends){
    if(name.length > largeName.length){
        largeName = name;
    }
    if(name.length<smallestName.length){
        smallestName = name;
    }
}
console.log(smallestName);
console.log(largeName);

// getting the largest and smallest relative from array by for loop
const relatives = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
let smallName = relatives[0];
let largestName = relatives[0];
for(let i = 0; i<relatives.length; i++){
    let relativeName = relatives[i];
    if(largestName.length < relativeName.length){
        largestName = relativeName;
    }
   if(smallName.length > relativeName.length){
        smallName = relativeName;
    }
}
console.log(largestName);
console.log(smallName);

