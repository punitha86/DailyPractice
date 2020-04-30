
var maxSubArray = function(nums) {
  var arrMax= nums[0];
var currentMax= nums[0];
for( let i=1; i< nums.length; i++){
  currentMax = Math.max(nums[i]+currentMax, nums[i]);
  arrMax = Math.max(arrMax,currentMax);
  console.log(nums[i]+currentMax,currentMax, arrMax, i);
}
//console.log(arrMax);
return arrMax;

};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
