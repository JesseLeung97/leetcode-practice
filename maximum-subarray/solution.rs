impl Solution {
    pub fn max_sub_array(nums: Vec<i32>) -> i32 {
        let mut iterSum: i32 = 0;
        let mut cumuSum: i32 = 0;
        
        for i in 0..nums.len() {
            iterSum = if(nums[i] + iterSum > nums[i]) { nums[i] + iterSum } else { nums[i] };
            if(i == 0 || iterSum > cumuSum) {
                cumuSum = iterSum;
            }
        }
        
        return cumuSum;
    }
}