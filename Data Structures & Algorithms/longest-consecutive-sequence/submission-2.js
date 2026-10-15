class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let object ={};
        for(let i = 0; i < nums.length; i++) {
            object[nums[i]] = 1;
        }
        let best = 0;
        for(let k in object) {
            let numK = Number(k);
            if(!object[numK- 1]) {
                let length = 1;
                let nextNum = numK + 1;
                while(object[nextNum]) {
                    nextNum++;
                    length++;

                }
                if(length > best) {
                    best = length;
                }
            }
        }
        return best;
    }
}
