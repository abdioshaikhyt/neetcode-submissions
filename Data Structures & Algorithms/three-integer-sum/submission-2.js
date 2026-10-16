class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b); 
        let box = [];
        for(let i = 0; i < nums.length; i++) {
            if (nums[i] === nums[i - 1]) {
                continue;
            }
        let l =  i + 1;
        let r = nums.length - 1;
            while(l < r) {
                if(nums[l] + nums[r] < -nums[i]) {
                    l++;
                }
                else if(nums[l] + nums[r] > -nums[i]) {
                    r--;
                }
                else {
                    box.push([nums[i], nums[l], nums[r]]);
                    while(nums[l] === nums[l + 1] && l < r) {
                        l++;
                    }
                    while(nums[r] === nums[r - 1] && l < r) {
                        r--;
                    }
                    l++; 
                    r--;
                   
                }

            }
        }
        return box;

    }
}
