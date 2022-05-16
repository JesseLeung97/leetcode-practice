// Brute Force
function containsDuplicateBruteForce(nums: number[]): boolean {
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            if(i === j) continue;
            if(nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
};

// Optimized Solution
function containsDuplicateOptimized(nums: number[]): boolean {
    let map = new Map<number, number>();
    for(let i = 0; i < nums.length; i++) {
        if(map.has(nums[i])) return true;
        map.set(nums[i], i);
    }
    return false;
};