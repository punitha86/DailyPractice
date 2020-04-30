
const swap = (nums,j,i) =>{
  let temp=nums[i];
  nums[i] = nums[j];
  nums[j]= temp;
}



const moveZeros = (nums) =>{
var indexOfzeroesToshift=[];
  for(let i=0,j=0; i<nums.length; i++){
    if(nums[i]!==0){
      if(j<i){
        //console.log(nums,j,i);
        swap(nums,j,i);

      }
      j++;
    }
  }



  console.log(nums);

}
moveZeros([0,1,0,3,12])
