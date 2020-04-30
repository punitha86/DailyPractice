

function sockMerchant(n, ar) {
let count=0;
let socksSeen= new Set();
ar.forEach((arr) => {
    if(socksSeen.has(arr)){
      count++;
      socksSeen.delete(arr);
    } else {
      socksSeen.add(arr);
    }
})
return count;


}
console.log(sockMerchant(7,[1,2,1,2,1,3,2]));
console.log(sockMerchant(9,[10,20,20,10,10,30,50,10,20]));
