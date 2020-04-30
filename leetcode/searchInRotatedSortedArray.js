let nums= [4,5,6,7,0,1,2];
let target=0;

var search = function(nums, target) {

if(nums.length===0 || nums==null || nums ==[] ){
    return -1
}
// if(nums.length==1 && nums[0]==target){
//     return 0;
// }else if(nums.length==1 && nums[0]!==target) {
//   return -1;
// }

var startIndex=0;
var endIndex = nums.length-1;

console.log(startIndex,endIndex);

while(startIndex<=endIndex){
let midIndex = Math.floor((endIndex+startIndex)/2);
if(nums[midIndex]==target){
  return midIndex;
}
if(nums[startIndex]>nums[midIndex]){
      if(nums[startIndex]<=target && target < nums[midIndex]){
        endIndex=midIndex+1;
        console.log("1 if");
      }else{
        startIndex= midIndex-1;
        console.log("1 else");
      }
}
else{
  if(nums[midIndex]<=target && target < nums[endIndex]){
    startIndex= midIndex+1
    //endIndex=midIndex+1;
    console.log("2 if");

  }else{
    //startIndex= midIndex-1
    endIndex=midIndex-1;
    console.log("2 else");
  }
}
console.log(startIndex,endIndex,nums[midIndex]);
}

return -1;

}



console.log(search(nums,target));
//return nums[endIndex]
