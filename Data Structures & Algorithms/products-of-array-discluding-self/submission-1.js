class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let r = 1;
        let output = [];
        output[0] = 1;
        for(let i = 1; i < nums.length; i++) {
            output[i] = output[i-1] * nums[i-1];
        }
       

        for(let j = nums.length - 1; j >= 0; j--) {
            output[j] = output[j] * r;
            r = r * nums[j];
        }
        return output;
    }
}
