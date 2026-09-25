class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const checkset = new Set();
        for(let i = 0; i < nums.length;i++){

            if (checkset.has(nums[i])){
                return true;
            }
            else{
                checkset.add(nums[i])

            }
         


        }
           return false;
    }
}
