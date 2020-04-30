var findMaxLength = function(nums) {
    let hash = {};
    let sum =0;
    let longest_subarray = 0;
     for(let i=0;i<nums.length;++i)
        {
            sum += nums[i]==0?-1:1;

            if(sum==0)
            {
                if(longest_subarray < i+1)
                    longest_subarray = i+1;
            }
            else if(hash.hasOwnProperty(sum))
            {
                if(longest_subarray < i-hash[sum])
                    longest_subarray = i-hash[sum];
            }
            else
                hash[sum] = i;
        }
    return longest_subarray;
};
