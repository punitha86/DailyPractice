

canJump(nums) {

        int n = nums.length;
        int reachable = 0;

        for(int i=0;i<n;++i)
        {
            if(reachable < i)
                return false;
            reachable = max(reachable,i+nums[i]);
        }
        return true;
    }
