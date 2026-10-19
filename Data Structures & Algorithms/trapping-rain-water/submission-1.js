class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
       let l = 0;
       let r = height.length -1;
       let total =  0;
        let tallestOnLeft = 0;
        let tallestOnRight = 0;

        while(l < r) {
                if(height[l] > tallestOnLeft) {
                    tallestOnLeft = height[l];
                }
         
            if(height[r] > tallestOnRight) {
                tallestOnRight = height[r];

            }
         
         
         
         
           if(tallestOnLeft < tallestOnRight) {
                let level = Math.min(tallestOnLeft, tallestOnRight);
                let water = level - height[l];
                 total += water;
                 l++;
           }
               else {
                let level = Math.min(tallestOnLeft, tallestOnRight);
                let water = level - height[r];
                 total += water;
                 r--;
           }
        }
        return total;
}
      
}