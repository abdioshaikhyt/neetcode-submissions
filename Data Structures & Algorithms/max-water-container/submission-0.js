class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let best =  0;
        let l = 0;
        let r = heights.length -1; 

        while(l < r) {
            let height = Math.min(heights[l], heights[r]);
            let width = r - l;
            let area = height * width;

            if(area > best) {
                best = area;
            }

            if(heights[l] < heights[r])  {
                l++;
            }
            else {
                r--;
            }
        }
        return best;
    }
}
