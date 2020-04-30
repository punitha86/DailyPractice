var subarraySum = function(nums, k) {
var count=0;
let sum=0;
const map = new Map([[0,1]]);
for(let i=0;i<nums.length;i++){

  sum+=nums[i];
  if(map.has(sum-k)){
    count+= map.get(sum-k)
  }
  map.set(sum,(map.get(sum)||0)+1)

  }
  return count
};

console.log(subarraySum([1,1,3,1,1],2));
