class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let r = l + 1;
        let best = 0;
        while(r < prices.length) {
            if(prices[l] < prices[r]) {
                let profit = prices[r] - prices[l];
                best = Math.max(best, profit);

            }
            else {
                l = r;
                
            }
             r = r + 1;
        }
        return best;
    }
}
