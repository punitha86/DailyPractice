const to=[1,3,5];
const  dine=[2,4,6];
const served=[1,2,3,5,4,6];
// let index=0;
//
//
// const compareIndex = (first,second )=>{
// if(served.indexOf(first)< served.indexOf(second)){
//   return true;
// }
//   return false;
// }
//
// const eachItem = (arr)=>{
// for (i=0;i<arr.length-1; i++){
//   compareIndex(arr[i],arr[i+1])? console.log("true"); : console.log("false");;
// }
//
// }
//
// eachItem(to);

const servedFirst = (to,dine,served) => {
  let toIndex=0 , dineIndex=0;
  let toMaxIndex=to.length-1;
  let dineMaxIndex=dine.length-1;

for(let i=0; i<served.length;i++){
  let currServing= served[i];
  if(toIndex<=toMaxIndex && currServing === to[toIndex]){
    toIndex++;
  } else if (dineIndex<=dineMaxIndex && currServing === dine[dineIndex]) {
    dineIndex++;
  } else{
    return false;
  }
}
if (dineIndex != dine.length ||
       toIndex != to.length) {
    return false;
}
  return true;
}

console.log(servedFirst(to,dine,served));
