class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length !== t.length) {
            return false;
        }
        let dictionaryS = {};
        let dictionaryT = {};

        for(let i = 0; i < s.length; i++) {
            if(dictionaryS[s[i]] === undefined)  {
                dictionaryS[s[i]] = 1;
            }
            else {
                dictionaryS[s[i]]++;
            }
        }

         for(let j = 0; j < t.length; j++) {
            if(dictionaryT[t[j]] === undefined)  {
                dictionaryT[t[j]] = 1;
            }
            else {
                dictionaryT[t[j]]++;
            }
        }
    
        for(let key in dictionaryS) {
            if(dictionaryS[key] !== dictionaryT[key]) {
                return false;
            }
            
        }
        return true;
}
}
