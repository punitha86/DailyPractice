let ints=[4,3,1,5,-6];

///we need to keep track of 3 things, if we need to apply it to negative numbers too.
//so kep track of highest 3 product and highest 2 product and lowest 2 in case of negatives
//highest and lowest at every possible moment.

let highest = Math.max(ints[0],ints[1]);
let lowest = Math.min(ints[0],ints[1]);

let highestProductOf2 = ints[0]*ints[1];
let lowestProductOf2 = ints[0]*ints[1];

let highestProductOf3 = ints[0] * ints[1] * ints[2];

for(let i=2;i< ints.length; i++){
  current=ints[i];

  highestProductOf3 = Math.max(highestProductOf3, current*highestProductOf2, current*lowestProductOf2);

  highestProductOf2=Math.max(highestProductOf2, current*highest, current* lowest);

  lowestProductOf2= Math.min(lowestProductOf2,current*highest, current* lowest);

  highest =Math.max(highest,current);

  lowest= Math.min(lowest,current);

}
console.log(highestProductOf3); highestProductOf3;
