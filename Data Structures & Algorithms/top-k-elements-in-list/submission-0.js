class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let group ={};

        for(let i = 0; i < nums.length; i++) {
            if(group[nums[i]] === undefined) {
                group[nums[i]] = 1;
            }
            else {
                group[nums[i]]++;
            }
        }
        let pairs = Object.entries(group);

        let sorted = pairs.sort((a, b) => Number(b[1]) - Number(a[1]));

        let m = sorted.slice(0,k);

        let ksad = m.map((pair) => {return Number(pair[0])});

        return ksad;
    }
}
