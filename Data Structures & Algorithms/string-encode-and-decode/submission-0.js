class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = '';
        for(let i = 0; i < strs.length; i++) {
            result += String(strs[i].length) + "#" + strs[i];
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let pos = 0;
        while(pos < str.length) {
            let idx = str.indexOf("#", pos);
            let length =  Number(str.slice(pos, idx));
             let word = str.slice(idx + 1, idx + 1 + length);
              result.push(word)
             pos = idx + 1 + length
        }
        return result;
    }
}
