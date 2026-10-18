class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let total = 0;
        let left = [];
        let right = [];
        let tallestOnLeft = 0;
        let tallestOnRight = 0;

        for(let i = 0; i < height.length; i++) {
            if(height[i] > tallestOnLeft) {
                tallestOnLeft = height[i];
                
            }
            left.push(tallestOnLeft);
        }
        for(let j = height.length -1; j>=0; j--) {
            if(height[j] > tallestOnRight) {
                tallestOnRight = height[j];
            }
            right[j] = tallestOnRight;
        }
    

    for(let k = 0; k < height.length; k++) {
        let level = Math.min(left[k], right[k]);
        let water = level - height[k];
        total += water;
    }
    return total;
}
      
}