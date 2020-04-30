
///Bruteforce


//  let arr= [1, 7, 3, 4];
//  let productarr=[];
// let x=  arr.forEach((ar,index,arr) => {
//  let product=1;
//   for( i=0; i<arr.length; i++){
// if(i!==index)
//     product*=arr[i];
//
//   }
//   productarr.push(product)
// return
//
// })
//  console.log(productarr);


let arr= [1, 7, 3, 4];
let productSoFar=1;
let result=[];
//let leftProductArray=[],rightProductArray=[];
for( let i=0; i<arr.length; i++){
  result[i]=productSoFar;
  productSoFar*=arr[i];

  // leftProduct=(leftProduct*arr[i]);
  // //rightProduct=(rightProduct*arr[arr.length-i-1]);
  // leftProductArray.push(leftProduct);
  // rightProductArray.push(rightProduct);

}

productSoFar = 1;
for (let j = arr.length - 1; j >= 0; j--) {
  result[j] *= productSoFar;
  productSoFar *= arr[j];
}

console.log(result);
