// Brute Force
impl Solution {
    pub fn contains_duplicate(nums: Vec<i32>) -> bool {
        for i in 0..nums.len() {
            for j in 0..nums.len() {
                if(i == j) { continue; }
                if(nums[i] == nums[j]) { return true; }
            }
        }
        return false;

        // let mut map = std::collections::HashMap::new();
        // for i in 0..nums.len() {
        //     if(map.contains_key(&nums[i])) { return true };
        //     map.insert(nums[i], i);
        // }
        // return false;
    }
}

// Optimized Solution
impl Solution {
    pub fn contains_duplicate(nums: Vec<i32>) -> bool {
        let mut map = std::collections::HashMap::new();
        for i in 0..nums.len() {
            if(map.contains_key(&nums[i])) { return true };
            map.insert(nums[i], i);
        }
        return false;
    }
}