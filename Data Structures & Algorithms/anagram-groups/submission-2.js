class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let groups = {};

for(let i =0; i < strs.length; i++) {
let key = strs[i].split("").sort().join();
groups[key] = groups[key] || [];
groups[key].push(strs[i]);
}

return Object.values(groups);
    }
}
