const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

const mergeArrays = (myArr, aliceArr) => {
let mergeArr=[];
let myPointer=0 , alicePointer=0;
for(let i=0; i<myArr.length+aliceArr.length; i++){
  //adding the condition when alice array is not exhausted 
if(alicePointer<=aliceArr.length && (myPointer>=myArr.length ||   myArr[myPointer]>aliceArr[alicePointer])){
  mergeArr.push(aliceArr[alicePointer]);
  alicePointer++;
  console.log('if',alicePointer,myPointer);
}else {
  mergeArr.push(myArr[myPointer]);
  myPointer++;
  console.log('else', alicePointer,myPointer);
}
}
return mergeArr
}

console.log(mergeArrays(myArray, alicesArray));
