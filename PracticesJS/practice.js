// function getTotalX(a, b) {
//     // Write your code here
//     let count=0;
//     for(let i=0; i<= 100; i++){
//       if(a.every(num => i%num ===0)){
//         if(b.every(num2 => num2%i==0)){
//           count++;
//         }
//       }
//     }
// console.log(count);
// }
// getTotalX([2,4],[16,32,96])

// function breakingRecords(scores) {
// let max=scores[0], min =scores[0];
// let maxCount=0, minCount=0;
// for(let i=0; i<scores.length; i++){
//   if(max>scores[i]){
//     maxCount++;
//     max=scores[i];
//   }
//   if (min<scores[i]) {
//     minCount++;
//     min=scores[i];
//   }
// }
// console.log(minCount,maxCount);
// }
//
// breakingRecords([3,4,21,36,10,28,35,5,24,42]);


// Complete the birthday function below.
// function birthday(s, d, m) {
//   let count=0;
//   for (let i = 0; i <=s.length-m ; i++){
//     let sum=0;
//     for(let j=0; j<m;j++){
//       sum+=s[i+j];
//     }
//     if(sum === d){
//       count++;
//     }
//   }
// console.log(count);
// }
// birthday([2,2,1,3,2], 4, 2)



// Complete the divisibleSumPairs function below.
// function divisibleSumPairs(n, k, ar) {
// let count=0;
// for(let i = 0; i <ar.length-1; i++){
//   for( let j = i+1; j< ar.length; j++){
//     //console.log('i',i,'j',j,'sum',ar[i]+ar[j]);
//     if((ar[i]+ar[j])%k === 0){
//       count++;
//     }
//   }
// }
// console.log(count);
// }
//
// divisibleSumPairs(6,3,[1,3,2,6,1,2])

// arr=[1,4,4,4,5,3];
// let obj={}, birdsCount=[], output=[];
// for(let i=0; i< arr.length; i++){
//   if(!obj[arr[i]]){
//     obj[arr[i]]=1;
//   }
//   else{
//     obj[arr[i]]+=1;
//   }
//
//   if(obj[arr[i]] > birdsCount)
//   birdsCount=obj[arr[i]];
// }
//
// for(let j=0;j<arr.length; j++){
//   if(obj[arr[j]]===birdsCount){
//     output.push(arr[j]);
//   }
// }
//   console.log(Math.min(...output));
///optimal solution taken from hacker rank
/*
input()
count = [0]*6
for t in map(int,input().strip().split()):
    count[t] += 1
print(count.index(max(count)))*/


//day of progrAMMER

//for years less than 1700
// let daysInAMonth=[31,28,31,30,31,30,31,31];
// let dayOfYear, year=1800;
// let sumOfDaysNotLeapYear= daysInAMonth.reduce((total,days) => {
//   return total+days;
// });
// //console.log(sumOfDaysNotLeapYear);
// if(year>=1918 && ((year%400===0) || (year%4===0 && year%100!==0))){
//   dayOfYear = 256-(sumOfDaysNotLeapYear+1);
// } else if (year<1918 && (year%4===0)) {
//     dayOfYear = 256-(sumOfDaysNotLeapYear+1);
// } else if (year === 1918){
//         return '26.09.1918';
// } else {
//     dayOfYear = 256-sumOfDaysNotLeapYear;
// }
// console.log(dayOfYear);

//Bon Appétit
// Complete the bonAppetit function below.
// let bill=[3,10,2,9],k = 1, b=7;
// function bonAppetit(bill, k, b) {
//
// let sum=bill.reduce((total,currentBillItem, index) => {
//   if(index!=k)
//   total+=currentBillItem;
//   return total;
// })
// console.log(sum);
//
// let correctBill= sum/2;
//
// console.log((b===correctBill) ? 'BonAppetit' : Math.ceil(b-correctBill));
// }
// bonAppetit(bill, k, b);


// //kaprekarNumbers function
// let p=99999, q=99999;
// let sqrNum=1,output=[];
// for (let i=p; i<=q; i++){
//   sqrNum = i*i;
//   //convert to string
//   //then split
//    //then map it to make it number for adding
//    //use reduce and sum it
// //);
//   let digitArray= (sqrNum + '')
//                   .split('')
//                   .map((i) => Number(i))
//
//   //or use this [...sqrNum + ''].map(sqrNum)
//   //console.log(i, digitArray)
// let firstHalf = digitArray.slice(0,(digitArray.length/2)).join('');
// let secHalf = digitArray.slice((digitArray.length/2),digitArray.length).join('');
// console.log(firstHalf,secHalf);
//   if(i === Number(firstHalf) + Number(secHalf)){
//     output.push(i);
//   }
//
// }
// console.log(output.join(' '));


//////////


// function beautifulTriplets(d, arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length - 2; i++) {
//     for (let j = i + 1; j < arr.length - 1; j++) {
//       //compare first with the erst after it
//       if (arr[j] - arr[i] === d) {
//
//         for (let k = j + 1; k < arr.length; k++) {
//           if (arr[k] - arr[j] === d) {
//             count++;
//           }
//         }
//       }
//     }
//   }
//   return count;
// }

//absolute permutation
///form an array of natural nums
 // let n = 100, k = 2;
// for(let i=0; i<n ; i++){
//   numArray.push(i+1);
// }
// console.log(numArray);
// let newArr = numArray.map((num,index,arr) => {
//   //console.log(index,num,k);
//   console.log(arr.length);
//   for(let i=0; i<arr.length; i++){
//     console.log(index+1,arr[i],i);
//     if(Math.abs((index+1)-arr[i])===k)
//     return arr[i];
//   }
// });
//
// for(let i=0; i<newArr.length; i++){
//   if(typeof(newArr[i])==="undefined"){
//     newArr=[];
//     newArr.push(-1);
//   }
// }
//
// console.log(newArr);
// let n = 100, k = 2;
// let newArr = [];
//    if(k === 0){
//        for(let i = 0; i < n; i++){
//            newArr.push(i+1);
//        }
//        console.log(newArr); ;
//    }
//    if(((n/k)%2) === 0){
//        let j = 1+k;
//        while(newArr.length < n){
//            for(let i = 0; i < k; i++){
//                newArr.push(newArr.length+j);
//            }
//            j = (j === 1+k) ? 1-k : 1+k;
//        }
//        console.log(newArr);
//    }
//    return [-1];
// console.log(newArr);
// let str="Code";
// let str1="";
// for(i=0;i<=str.length;i++){
//     for(j=i;j<=i;j++){
//       str1+=str.slice(0,j);
//     }
//   }
// console.log(str1);

//
// const fix3n4 = (arr) =>{
//   let arr3=[];
//   let arr4=[];
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]===3){
//       arr3.push(i);
//       if(arr4.length!==0){
//         k=arr4.pop();
//         let temp2 = arr[i+1];
//         arr[i+1]=arr[k];
//         arr[k]=temp2;
//
//       }
//     }
//     if(arr[i]===4){
//       arr4.push(i);
//       ///swap with the arr3 pop
//       let j = arr3.pop()+1;
//       if(j){
//       let temp = arr[j];
//        arr[j]=arr[i];
//       arr[i]=temp;
//       arr4.pop();
//       }
//
//     }
//   }
//   return arr;
// }
// console.log(fix3n4([1, 3, 1, 4, 4, 3, 1]));

// const maxSpan =( arr)=>{
//   let maxSpan=1;
//   for(i=0;i<arr.length;i++){
//     let currentmaxSpan = arr.lastIndexOf(arr[i])-arr.indexOf(arr[i])+1;
//     maxSpan=Math.max(currentmaxSpan,maxSpan);
//   }
//   return maxSpan;
// }
// console.log(maxSpan([1, 4, 2, 1, 4, 1, 4]));
//
// const withoutString = (str, rem)=>{
//   let remLen=rem.length;
//   for(let i=0; i<str.length;i++){
//     var res = str.slice(i, remLen+i);
//     console.log('res',res);
//     if(res===rem){
//       console.log("inside if");
//       str.splice(i,remLen)
//     }
//     console.log(str);
//   }
//   return str;
// }
// console.log(withoutString('Hello there', "llo"));
//
// function isdigit(char){
//   return "1234567890".indexOf(char)>=0;
// }
// function sumNumbers(str){
//   let num="", numArr=[];
//   for(let i=0; i<str.length; i++){
//     if(isdigit(str[i]) && isdigit(str[i+1])){
//       num+=str[i];
//     }else if(isdigit(str[i])){
//       num+=str[i];
//       numArr.push(parseInt(num));
//       num="";
//     }
//   }
//   return numArr.reduce((arr,c) => arr+c);
// }
// console.log(sumNumbers("7 11"));



const canBalance = (arr) =>{
let leftSum=0;
let rightSum=0;
let i=0;
  let leftLen= Math.floor(arr.length/2);
  console.log(leftLen);
while(i<arr.length){
  leftSum=arr.slice(0,leftLen).reduce((arr,c)=>arr+c);
  rightSum=arr.slice(leftLen).reduce((arr,c)=>arr+c);
  console.log(leftSum,rightSum);
  if(leftSum===rightSum){
    return true
  }else if (leftSum<rightSum) {
    leftLen++;
  }else
  leftLen--;
  i++;
}

return false;
}
console.log(canBalance([4, 1, 1, 1, 1]));;
